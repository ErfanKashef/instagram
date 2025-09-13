import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import Input from "./input";
import { clinet } from "../../lib";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await clinet.post(
        "/api/user/signup",
        { username, password, email },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Signup success:", data);

      if (data.status === "success") {
        navigate("/login"); // redirect to login after successful signup
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="w-5/12 flex flex-col justify-center gap-4 mx-auto px-6 py-4 border rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >

        <img
          className="pt-2 w-52 h-16 mx-auto mb-4"
          src="../img/Vector (7).png"
          alt="logo"
        />


        <Input
          type="email"
          nameItem="email"
          placeholder="Email"
          classname="border rounded px-3 py-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="text"
          nameItem="username"
          placeholder="User Name"
          classname="border rounded px-3 py-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          nameItem="password"
          placeholder="Password"
          classname="border rounded px-3 py-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          nameOfButton="Sign Up"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition w-full"
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <div className="flex gap-2 justify-center">
          <p>Already have an account?</p>
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signin;
