import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="flex flex-col gap-3 border-r p-4 pr-20 fixed h-screen">
      <div className="pb-10">
        <img
          src="/public/img/Vector (7).png"
          alt="logo"
          className="w-28 h-7"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center">
          <img src="/public/img/home.png" alt="home" className="w-6 h-6" />
          <Link to="/home">
            <p>Home</p>
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <img src="/public/img/serch.png" alt="search" className="w-6 h-6" />
          <p>Search</p>
        </div>

        <div className="flex gap-3 items-center cursor-pointer">
          <img src="/public/img/add.png" alt="create" className="w-6 h-6" />
          <p>Create</p>
        </div>

        <div className="flex gap-3 items-center">
          <img
            src="/public/img/Frame.png"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          <Link to="/myprofile">
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;