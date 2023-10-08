import React, { useState } from "react";
import Image from "next/image";
import "./imageUpload.scss";

interface ImageUploadProps {
    imageUrl: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({imageUrl}) => {

  const [selectedImageUrl, setSelectedImageUrl] = useState(imageUrl);

  return (
    <div className="image-upload-container">
      {selectedImageUrl && (
        <div className="image-display">
          <Image
            className="profile-pic"
            alt="image-upload"
            width={200}
            height={200}
            src={selectedImageUrl}
          />
          <br />
          <button className="button-remove-image" onClick={() => setSelectedImageUrl("/userIcon.png")}>Remove</button>
        </div>
      )}
      <input className="file-upload"
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImageUrl(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </div>
  );
};

export default ImageUpload;