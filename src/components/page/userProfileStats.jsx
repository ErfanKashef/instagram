import { clinet } from "../../lib";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileStats = ({ username }) => {
  const [posts, setPosts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const navigate = useNavigate();

  const getArticles = async () => {
    try {
      const res = await clinet.get(`/api/article/u/${username}`);
      setPosts(res.data.length);
    } catch (err) {
      console.error("Error fetching articles:", err.response?.data || err.message);
    }
  };

  const getFollowers = async () => {
    try {
      const res = await clinet.get(`/api/user/followers/${username}`);
      const list = res.data.data?.followings || [];
      setFollowers(list.length);
    } catch (err) {
      console.error("Error fetching followers:", err.response?.data || err.message);
    }
  };

  const getFollowing = async () => {
    try {
      const res = await clinet.get(`/api/user/following/${username}`);
      const list = res.data.data?.following || [];
      setFollowing(list.length);
    } catch (err) {
      console.error("Error fetching following:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    if (username) {
      getArticles();
      getFollowers();
      getFollowing();
    }
  }, [username]);

  return (
    <div className="flex flex-row gap-7">
      <div className="flex gap-2 items-center">
        <p className="text-sm">Posts</p>
        <p className="text-sm">{posts}</p>
      </div>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => navigate(`/followers/${username}`)}
      >
        <p className="text-sm">Followers</p>
        <p className="text-sm">{followers}</p>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-sm">Following</p>
        <p className="text-sm">{following}</p>
      </div>
    </div>
  );
};

export default ProfileStats;
