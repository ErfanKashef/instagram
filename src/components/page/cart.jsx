import { useState, useEffect } from "react";
import Input from "./input";
import { clinet } from "../../lib";

function Post() {
  const [postData, setPostData] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
  const token = localStorage.getItem("accessToken");
  try {
    const res = await clinet.get("/api/article/timeline", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    setLoading(false);

    if (res.status === 200 && res.data?.Articles?.length > 0) {
      setPostData(res.data.Articles[0]);
    } else {
      setError("No posts found");
    }
  } catch (err) {
    setLoading(false);
    setError(err.response?.data?.message || "Failed to fetch posts");
    console.error("Backend error:", err.response || err);
  }
};


  useEffect(() => {
    getData();
  }, []);

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!postData) return null;

    const {
      user: { profilePicture: avatar, username },
      title: caption,
      content: postImage,
    } = postData;

  return (
    <div className="bg-amber-400 flex flex-col p-10 w-full">
      <div className="flex items-center gap-2 w-full">
        <img className="w-10 h-10 rounded-full" src={avatar} alt={username} />
        <p className="font-semibold">{username}</p>
        <p className="text-gray-500">• just now</p>
        <img
          className="w-7 h-7 ml-auto cursor-pointer"
          src="/menu-icon.png"
          alt="menu"
        />
      </div>

      <img className="mt-4 rounded-lg" src={postImage} alt="post" />

      <div className="flex justify-between mt-3 w-full items-center">
        <div className="flex items-center gap-2">
          <svg
            onClick={() => setLiked(!liked)}
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
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
          <img className="w-6 h-6" src="/comment-icon.png" alt="comment" />
        </div>
        <img src="/share-icon.png" alt="share" />
      </div>

      <div className="mt-2">
        <p className="font-bold">0 likes</p>
        <p>
          <span className="font-bold">{username}</span> {caption}
        </p>
        <p className="font-bold cursor-pointer">See translation</p>
        <p className="text-gray-500">View all 0 comments</p>
      </div>

      <div className="flex items-center justify-between mt-3 gap-2">
        <Input
          type="text"
          nameItem="username"
          placeholder="Add a comment…"
          classname="h-6 w-full"
        />
        <img
          className="w-4 h-4 cursor-pointer"
          src="/send-icon.png"
          alt="send"
        />
      </div>
    </div>
  );
}

export default Post;

