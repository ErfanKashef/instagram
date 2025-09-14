import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clinet } from "../../lib";

const FollowersList = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFollowers = async () => {
    try {
      const res = await clinet.get(`/api/user/followers/${username}`);
      const list = res.data?.data?.followings || [];
      setFollowers(list);
    } catch (err) {
      console.error("Error fetching followers:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) getFollowers();
  }, [username]);

  if (loading) return <p>Loading followers...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Followers of {username}</h2>
      {followers.length === 0 ? (
        <p>No followers yet.</p>
      ) : (
        <ul className="space-y-3">
          {followers.map((f) => (
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

export default FollowersList;
