import React, { useState } from "react";
import Image from "next/image";
import './imageUpload.css';

interface ImageUploadProps {
    imageUrl: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({imageUrl}) => {

  const [selectedImageUrl, setSelectedImageUrl] = useState(imageUrl);

  return (
    <div>
      {selectedImageUrl && (
        <div>
          <Image
            alt="image-upload"
            width={200}
            height={200}
            src={imageUrl || '/userIcon.png'}
          />
          <br />
          <button onClick={() => setSelectedImageUrl('/userIcon.png')}>Remove</button>
        </div>
      )}
      <input
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