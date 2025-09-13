import { Link } from "react-router-dom";
import { InstaTitle } from "./InstaTitle";

export function LogIn() {
    return (
    <div>
        <InstaTitle LogoWidth="255px" LogoHeight="87px"/>
        <span>
            <p>
            Don’t have an account?
            </p>
            <Link to={<SignUp/>}/>
        </span>
        
    </div>
)
}
