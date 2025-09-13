const Profile = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  justify-center gap-20 py-10">
        <div>
          <img
            src="/public/img/Frame.png"
            alt="Frame"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xl">username</p>
          </div>
          <div className="flex flex-row gap-7">
            <div className="flex gap-2 items-center">
              <p className="text-sm">post</p>
              <p className="text-sm">11</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm">follower</p>
              <p className="text-sm">11</p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="text-sm">following</p>
              <p className="text-sm">11</p>
            </div>
          </div>

          <div className="felx flex-col gap-2">
            <p className="text-sm">Upvox</p>
            <p className="text-sm text-gray-500">Product/service</p>
            <p className="text-sm">
              Your favourite fun clips 🎦 in your language 🌎
            </p>
            <p className="text-sm text-blue-700 cursor-pointer">Follow</p>
          </div>
        </div>
      </div>
      <div className="bg-[#DBDBDB] rounded-full h-0.5 mb-6"></div>
      <div className="flex justify-center">
        <div className="grid  grid-cols-3 gap-3">
          <img src="/public/img/photo.png" alt="photo" />
          <img src="/public/img/photo.png" alt="photo" />
          <img src="/public/img/photo.png" alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
