const ProfileInfo = ({ username, bio, category }) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-xl">{username}</p>
      </div>
      <div className="felx flex-col gap-2">
        <p className="text-sm">{bio}</p>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-blue-700 cursor-pointer">Follow</p>
      </div>
    </div>
  );
};

export default ProfileInfo;