const ProfileImage = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className="rounded-full" />
    </div>
  );
};

export default ProfileImage;
