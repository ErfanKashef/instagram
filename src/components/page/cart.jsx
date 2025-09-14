import { useState } from "react";
import Input from "./input";

function HeartIcon() {
  const [liked, setLiked] = useState(false);

  return (
    <svg
      onClick={() => setLiked(!liked)}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      stroke="red"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
    >
      <path
        d="M19.5 12.572l-7.5 7.428l-7.5-7.428a5 5 0 1 1 7.5-6.566a5 5 0 1 1 7.5 6.572"
        fill={liked ? "red" : "white"}
      />
    </svg>
  );
}

function Cart() {
  return (
    <>
      <div className="bg-amber-400 flex flex-col justify-center w-5/12 min-h-screen p-4 mx-auto">
        <div className="flex items-center gap-2 w-full">
          <img
            className="w-10 h-10 rounded-full"
            src="../img/Auto Layout Horizontal.png"
            alt="Layout"
          />
          <p className="font-semibold">lewishamilton</p>
          <img className="w-2 h-2" src="../img/Frame (5).png" alt="icon" />
          <p className="text-gray-500">• 5h</p>
          <img
            className="w-7 h-7 ml-auto cursor-pointer"
            src="../img/Frame (6).png"
            alt="icon"
          />
        </div>

        <img
          className="mt-4 rounded-lg"
          src="../img/Auto Layout Horizontal (1).png"
          alt="post"
        />

        <div className="flex justify-between mt-3 w-full items-center  ">
          <div className="flex items-center gap-2 ">
            <HeartIcon />
            <img className="w-6 h-6" src="../img/Frame (7).png" alt="icon" />
          </div>

          <div>
            <img src="../img/Frame (8).png" alt="icon" />
          </div>
        </div>

        <div className=" ">
          <p className="font-bold">741,368 likes</p>
          <p>
            <span className="font-bold">lewishamilton</span>Parabéns Ayrton,
            minha inspiração sempre 🇧🇷💫
          </p>
          <p className="font-bold">See translation</p>
          <p className="text-gray-500">View all 13,384 comments</p>
        </div>
        <div className="flex ">
          <div className="flex gap-65">
            <div className="flex items-center gap-2 ">
              <Input
                type="text"
                nameItem="username"
                placeholder="Add a comment…"
                classname=" h-6 w-full"
              />
            </div>
            <div>
              <img className="w-4 h-4" src="../img/Frame (9).png" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
