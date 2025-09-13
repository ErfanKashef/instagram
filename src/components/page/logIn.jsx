import { Link } from "react-router-dom";
import { InstaTitle } from "./InstaTitle";
import Input from "./input";
import { Signin } from "./signin";
import { useEffect, useState } from "react";
import Button from "./button";

export function Login() {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
    fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: "johndoe",
        password: "StrongPassword123",
    }),
})
    .then((response) => response.json())
    .then((data) => setUserData(data))
    .catch((err) => console.error(err));
}, []);

    
    return (
    <div>
        <InstaTitle LogoWidth="255px" LogoHeight="87px"/>
        <span>
            <Input type="text" nameItem="usernameLogIn" placeholder='User Name' classname="border rounded px-3 py-2"/>
            <Input type="password" nameItem="passLogIn" placeholder='Password' classname="border rounded px-3 py-2"/>
            <Button type="submit" className="border rounded px-3 py-2" nameOfButton="Log in"/>
            <p>
            Don’t have an account?
            </p>
            <Link to="/signin">Go to Signin</Link>
        </span>
        
    </div>
);
};
