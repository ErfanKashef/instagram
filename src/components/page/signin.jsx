import { useState } from "react";
import Button from "./button";
import Input from "./input";

const Signin = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="w-5/12 h-1/2 flex flex-col justify-center gap-4 mx-auto px-6 py-4 border rounded-lg shadow-md"
        action="/login"
        method="POST"
      >
        <img
          className="w-20 h-16 mx-auto mb-4"
          src="../img/Vector (7).png"
          alt="logo"
        />

        <Input
          type="email"
          nameItem="email"
          placeholder="Email"
          classname="border rounded px-3 py-2"
        />

        <Input
          type="text"
          nameItem="username"
          placeholder="User Name"
          classname="border rounded px-3 py-2"
        />

        <div className="flex items-center relative">
          <input
            type={visible ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="border rounded px-3 py-2 w-full"
            required
          />
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="text-gray-500 px-3 py-2 absolute right-0"
          >
            {visible ? "Hide" : "Show"}
          </button>
        </div>

        <Button
          type="submit"
          nameOfButton="Sign Up"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        />

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