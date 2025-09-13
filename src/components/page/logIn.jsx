import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clinet } from "../../lib";
import appPhoto from '../../assets/Group 91(1).png';
import { InstaTitle } from "./InstaTitle";
import Button from "./button";
import Input from "./input";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accessToken, setAccessToken] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data } = await clinet.post(
            "/api/user/login",
            { username, password },
            { headers: { "Content-Type": "application/json" } }
        );

        console.log("Login success:", data);

        if (data.accessToken) {
            setAccessToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);

            const user = data.data.username;

            let articles = [];
            try {
                const articlesRes = await clinet.get(`/api/article/u/${user}`, {
                    headers: { Authorization: `Bearer ${data.accessToken}` },
                });
                articles = articlesRes.data;
            } catch (err) {
                console.warn("Could not fetch articles:", err.response?.data || err.message);
            }

            navigate("/myprofile", { state: { articles, username: user } });
        } else {
            setError("No access token received");
        }
    } catch (err) {
        console.error("Login error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Login failed");
    }
};


    return (
        <div className="flex justify-center items-center gap-[117px]">

            <img src={appPhoto} alt="Photo of the app" />
            <div className="flex justify-center items-center flex-col border-2 border-[#CACACA] pt-[40px] px-[72px] pb-[49px]">
                <InstaTitle classname="mb-[39px]" />

                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        nameItem="usernameLogIn"
                        placeholder="User Name"
                        classname="border rounded px-3 py-2 w-[292px] mb-[8px]"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Input
                        type="password"
                        nameItem="passLogIn"
                        placeholder="Password"
                        classname="border rounded px-3 py-2 w-[292px] mb-[20px]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        className="border rounded px-3 py-2 bg-[#0095F6] w-[292px] mb-[113.24px]"
                        nameOfButton="Log in"
                    />
                </form>

                {error && <p className="text-red-500 mt-2">{error}</p>}
                {accessToken && <p className="text-green-500 mt-2">✅ Logged in! Token saved.</p>}

                <p>
                    Don’t have an account? <Link to="/signin" className="text-[#0095F6]">Sign up</Link>
                </p>

            </div>
        </div>
    );
}
