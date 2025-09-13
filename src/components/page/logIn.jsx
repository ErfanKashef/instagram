import { Link } from "react-router-dom";
import { InstaTitle } from "./InstaTitle";

const LogIn = () => {
  return (
    <div>
      <InstaTitle LogoWidth="255px" LogoHeight="87px" />
      <span>
        <p>Don’t have an account?</p>
        <Link to="/signup"></Link>
      </span>
    </div>
  );
};
export default LogIn;
