type ProfileImageProps = {
    src: string;
    alt: string;
}

const ProfileImages = ({ src, alt}: ProfileImageProps) => { 
    return (
      <div className="mb-6 relative z-20">
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 object-cover rounded-xl shadow-lg outline outline-2 outline-white"
        />
      </div>
    );
}

export default ProfileImages;