import "./Uploads.css";
import ImageUploader from "./ImageUploader";
import { lemme } from "./utils/images";
import { useEffect } from "react";

function Uploads({ name, images, setImages, navigate }) {
  useEffect(() => {
    if (name !== lemme) {
      navigate("/");
    }
    console.log(name);
  }, []);
  return (
    <div className="uploads">
      <h1>Upload Images</h1>
      <ImageUploader onImagesReady={setImages} />

      <div>
        {images.length > 0 && (
          <>
            <p>We’ve got {images.length} images to play with.</p>
            <button
              className="uploads__button"
              onClick={() => navigate("/storytime")}
            >
              Continue to app
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Uploads;
