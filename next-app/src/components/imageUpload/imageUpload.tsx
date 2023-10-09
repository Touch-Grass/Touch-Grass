import React, { useRef, useState } from "react";
import Image from "next/image";
import "./imageUpload.scss";

interface ImageUploadProps {
    imageUrl: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({imageUrl}) => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };  
  
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="image-upload-container">
        <div 
          className="image-display"
          onClick={handleImageClick}
        >
          { image ? 
            <Image
              className="profile-pic"
              alt="image-upload"
              width={200}
              height={200}
              src={URL.createObjectURL(image)}
            />
            :
            <Image
              className="profile-pic"
              alt="image-upload"
              width={200}
              height={200}
              src="/userIcon.png"
            />
          }
          <div className="image-overlay">
            <div>Change profile photo</div>
          </div>
        </div>
        <button className="button-remove-image" onClick={() => setImage("")}>Remove</button>
        
      <input className="file-upload"
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;