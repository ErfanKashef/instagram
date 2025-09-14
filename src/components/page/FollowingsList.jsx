import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clinet } from "../../lib";

const FollowingsList = () => {
  const { username } = useParams();
  const [followings, setFollowings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFollowings = async () => {
    try {
      const res = await clinet.get(`/api/user/followings/${username}`);
      const list = res.data?.followings || [];
      setFollowings(list);
    } catch (err) {
      console.error("Error fetching followings:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) getFollowings();
  }, [username]);

  if (loading) return <p>Loading followings...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Following of {username}</h2>
      {followings.length === 0 ? (
        <p>Not following anyone yet.</p>
      ) : (
        <ul className="space-y-3">
          {followings.map((f) => (
            <li key={f._id} className="flex items-center gap-3 border-b pb-2">
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
    </div>
  );
};

export default FollowingsList;
