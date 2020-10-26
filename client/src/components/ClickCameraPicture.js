import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import cameraimage from "../images/camera.png";
import ImagePreview from "./ImagePreview";
import "../styles/imagePreview.css";

export default function ClickCameraPicture() {
  const [dataUri, setDataUri] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
    setIsCameraOpen(false);
  }
  const isFullscreen = false;

  return (
    <div>
      <div class="image-upload">
        <a onClick={() => setIsCameraOpen(true)}>
          <img src={cameraimage} alt="open camera" />
        </a>
        {isCameraOpen && (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )}

        {!isCameraOpen && (
          <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
        )}
      </div>
    </div>
  );
}
