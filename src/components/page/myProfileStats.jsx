import { clinet } from "../../lib";
import { useEffect, useState } from "react";

const ProfileStats = ({ username }) => {
  const [posts, setPosts] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  const [followersList, setFollowersList] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      setFollowersList(list);
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
    <>
      <div className="flex flex-row gap-7">
        <div className="flex gap-2 items-center">
          <p className="text-sm">Posts</p>
          <p className="text-sm">{posts}</p>
        </div>
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <p className="text-sm">Followers</p>
          <p className="text-sm">{followers}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm">Following</p>
          <p className="text-sm">{following}</p>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 w-[400px] max-h-[500px] overflow-y-auto shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Followers</h2>
            {followersList.length === 0 ? (
              <p className="text-gray-500">No followers yet</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {followersList.map((f) => (
                  <li key={f._id} className="flex items-center gap-3">
                    <img
                      src={f.profilePicture}
                      alt={f.username}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{f.username}</span>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileStats;
