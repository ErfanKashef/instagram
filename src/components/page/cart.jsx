import { useState } from "react";
import Input from "./input";

function Post({
  avatar,
  username,
  time,
  menuIcon,
  postImage,
  commentIcon,
  shareIcon,
  likes,
  caption,
  commentsCount,
  sendIcon,
}) {
  function HeartIcon({ size = 32 }) {
    const [liked, setLiked] = useState(false);
    return (
      <svg
        onClick={() => setLiked(!liked)}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
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

  function PostHeader() {
    return (
      <div className="flex items-center gap-2 w-full">
        <img className="w-10 h-10 rounded-full" src={avatar} alt={username} />
        <p className="font-semibold">{username}</p>
        <p className="text-gray-500">• {time}</p>
        <img
          className="w-7 h-7 ml-auto cursor-pointer"
          src={menuIcon}
          alt="menu"
        />
      </div>
    );
  }

  function PostImage() {
    return <img className="mt-4 rounded-lg" src={postImage} alt="post" />;
  }

  function PostActions() {
    return (
      <div className="flex justify-between mt-3 w-full items-center">
        <div className="flex items-center gap-2">
          <HeartIcon />
          <img className="w-6 h-6" src={commentIcon} alt="comment" />
        </div>
        <img src={shareIcon} alt="share" />
      </div>
    );
  }

  function PostDetails() {
    return (
      <div className="mt-2">
        <p className="font-bold">{likes} likes</p>
        <p>
          <span className="font-bold">{username}</span> {caption}
        </p>
        <p className="font-bold cursor-pointer">See translation</p>
        <p className="text-gray-500">View all {commentsCount} comments</p>
      </div>
    );
  }

  function CommentBox() {
    return (
      <div className="flex items-center justify-between mt-3 gap-2">
        <Input
          type="text"
          nameItem="username"
          placeholder="Add a comment…"
          classname="h-6 w-full"
        />
        <img className="w-4 h-4 cursor-pointer" src={sendIcon} alt="send" />
      </div>
    );
  }

  return (
    <div className=" px-150">
      <div className="bg-amber-400 flex flex-col p-10 w-full">
        <PostHeader />
        <PostImage />
        <PostActions />
        <PostDetails />
        <CommentBox />
      </div>
    </div>
  );
}

export default Post;
