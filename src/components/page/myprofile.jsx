import ProfileImage from "./myProfileImage";
import ProfileStats from "./myProfileStats";
import ProfileInfo from "./myProfileInfo";
import ProfileGallery from "./myProfileGallery";
import { useEffect } from "react";
import { clinet } from "../../lib";

const MyProfile = () => {

  useEffect (() => {
    const followers = async () => {
      try {
        response = clinet.get(`/api/user/followers/${username}`)
        console.log(response)
      }
      catch (err) {
        console.log(err)
      }
    }
    followers()
  }, [username])

  return (
    <div className="container mx-auto">
      <div className="flex justify-center gap-20 py-10">
        <ProfileImage src="/public/img/Frame.png" alt="Frame" />
        <div className="flex flex-col gap-5">
          <ProfileStats posts="12" followers="12" following="12" />
          <ProfileInfo
            username="erfan"
            bio="Hello, I'm erfan"
            category="Software Engineer"
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
