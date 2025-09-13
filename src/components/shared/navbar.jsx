const Navbar = () => {
  const Navbaritems = [
    {
      name: "Home",
      path: "/",
      id: 1,
    },
    {
      name: "login",
      path: "/login",
      id: 2,
    },

    {
      name: "signup",
      path: "/signup",
      id: 3,
    },
    {
      name: "myprofile",
      path: "/myprofile",
      id: 4,
    },
  ];
  return (
    <div className=" flex flex-col gap-3 border-r p-4 pr-20 ">
      <div className="pb-10">
        <img src="/public/img/Vector (7).png" alt="logo" className="w-28 h-7" />
      </div>
      <div className=" flex gap-2 flex-col">
        <div className="flex gap-3 items-center">
          <img src="/public/img/home.png" alt="home" className="w-6 h-6" />
          <p>Home</p>
        </div>
        <div className="flex gap-3 items-center">
          <img src="/public/img/serch.png" alt="home" className="w-6 h-6" />
          <p>Serch </p>
        </div>
        <div className="flex gap-3 items-center">
          <img src="/public/img/create.png" alt="home" className="w-6 h-6" />
          <p>Create</p>
        </div>
        <div className="flex gap-3 items-center">
          <img src="/public/img/Frame.png" alt="home" className="w-6 h-6 rounded-full" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
