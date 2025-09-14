const UserProfileStats = ({ posts, followers, following }) => {
  return (
    <div className="flex flex-row gap-7">
      <div className="flex gap-2 items-center">
        <p className="text-sm">Posts</p>
        <p className="text-sm">{posts}</p>
      </div>
      <div className="flex gap-2 items-center">
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

export default UserProfileStats;
