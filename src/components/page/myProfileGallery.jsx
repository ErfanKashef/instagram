const ProfileGallery = ({ images }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-3">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`photo-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProfileGallery;