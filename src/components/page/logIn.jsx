import { Link } from "react-router-dom";
import { InstaTitle } from "./InstaTitle";
import Input from "./input"; 
import Button from "./button";
import { useState } from "react";
import axios from "axios";
import { clinet } from "../../lib";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accessToken, setAccessToken] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const { data } = await clinet.post(
            "/api/user/login",
            {
            username: username,
            password: password,
            },
            {
            headers: { "Content-Type": "application/json" },
            }
        );

        console.log("Login success:", data);

        if (data.accessToken) {
            setAccessToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
        } else {
            setError("No access token received");
        }
        } catch (err) {
        console.error("Login error:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
    <div>
        <InstaTitle LogoWidth="255px" LogoHeight="87px" />

        <form onSubmit={handleSubmit}>
        <Input
            type="text"
            nameItem="usernameLogIn"
            placeholder="User Name"
            classname="border rounded px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />

        <Input
            type="password"
            nameItem="passLogIn"
            placeholder="Password"
            classname="border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <Button
            type="submit"
            className="border rounded px-3 py-2"
            nameOfButton="Log in"
        />
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {accessToken && <p className="text-green-500 mt-2">✅ Logged in! Token saved.</p>}

        <p className="mt-4">Don’t have an account?</p>
        <Link to="/signin">Go to Signin</Link>
    </div>
);
}
