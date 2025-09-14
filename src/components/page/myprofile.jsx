import { useEffect, useState } from "react";
import ProfileImage from "./myProfileImage";
import ProfileStats from "./myProfileStats";
import ProfileInfo from "./myProfileInfo";
import ProfileGallery from "./myProfileGallery";
import { clinet } from "../../lib";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const id = localStorage.getItem("userId");
      const res = await clinet.get(`/api/user/${id}`);
      setUser(res.data.user);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-20 py-10">
        <ProfileImage src={user.profilePicture} alt={user.username} />
        <div className="flex flex-col gap-5">
          <ProfileStats posts="12" followers="12" following="12" />
          <ProfileInfo
            username={user.username}
            bio={user.bio || "No bio yet"}
            category={user.category || "No category"}
          />
        </div>
      </div>

      <div className="bg-[#DBDBDB] rounded-full h-0.5 mb-6"></div>

      <ProfileGallery
        images={[
          "/public/img/photo.png",
          "/public/img/photo.png",
          "/public/img/photo.png",
        ]}
      />
    </div>
  );
};

export default MyProfile;
