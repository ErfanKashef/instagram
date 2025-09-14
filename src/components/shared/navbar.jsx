import { useState } from "react";
import {
  IconHome,
  IconSearch,
  IconSquareRoundedPlus,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import CreateModal from "./components/CreateModal";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="flex relative h-screen">
      <div
        className={`flex flex-col border-r p-4 transition-all duration-500 ease-in-out ${
          searchActive ? "w-20" : "w-64"
        }`}
      >
        <div className="pb-10 flex items-center gap-2 transition-all duration-500 ease-in-out">
          {searchActive ? (
            <IconBrandInstagram
              size={24}
              className="transition-all duration-500 ease-in-out"
            />
          ) : (
            <img
              src="/public/img/Vector (7).png"
              alt="logo"
              className="w-28 h-7 transition-all duration-500 ease-in-out"
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-3 items-center transition-all duration-500 ease-in-out">
            <IconHome size={24} />
            {!searchActive && (
              <Link to="/home">
                <p>Home</p>
              </Link>
            )}
          </div>

          <div
            className="flex gap-3 items-center cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => setSearchActive(!searchActive)}
          >
            <IconSearch size={24} />
            {!searchActive && <p>Search</p>}
          </div>

          <div
            className="flex gap-3 items-center cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => setShowCreate(true)}
          >
            <IconSquareRoundedPlus size={24} />
            {!searchActive && <p>Create</p>}
          </div>

          <div className="flex gap-3 items-center transition-all duration-500 ease-in-out">
            <img
              src="/public/img/Frame.png"
              alt="home"
              className="w-6 h-6 rounded-full transition-all duration-500 ease-in-out"
            />
            {!searchActive && (
              <Link to="/myprofile">
                <p>Profile</p>
              </Link>
            )}
          </div>
        </div>
      </div>

      {searchActive && <Search onClose={() => setSearchActive(false)} />}

      {showCreate && <CreateModal onClose={() => setShowCreate(false)} />}
    </div>
  );
};

export default Navbar;
