import { Link } from "react-router-dom";

const NavbarItem = ({ icon, label, path, onClick }) => {
  if (path) {
    return (
      <div className="flex gap-3 items-center cursor-pointer">
        {icon}
        <Link to={path}>
          <p>{label}</p>
        </Link>
      </div>
    );
  }

  return (
    <div onClick={onClick} className="flex gap-3 items-center cursor-pointer">
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default NavbarItem;