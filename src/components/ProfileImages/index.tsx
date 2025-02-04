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
          className="w-48 h-48 object-cover rounded-full shadow-lg"
        />
      </div>
    );
}

export default ProfileImages;