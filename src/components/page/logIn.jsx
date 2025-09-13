import { Link } from "react-router-dom";
import { InstaTitle } from "./InstaTitle";
import Input from "./input";
import Button from "daisyui/components/button";
import { Signin } from "./signin";

export function Login() {
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
            <Link to={<Signin />}/>
        </span>
        
    </div>
);
};
