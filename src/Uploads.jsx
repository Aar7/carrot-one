import "./Uploads.css";
import ImageUploader from "./ImageUploader";

function Uploads({ images, setImages, navigate }) {
  return (
    <div>
      <h1>Upload Images</h1>
      <ImageUploader onImagesReady={setImages} />

      <div>
        {images.length > 0 && (
          <p>We’ve got {images.length} images to play with.</p>
        )}
      </div>
      <button className="button" onClick={() => navigate("/storytime")}>
        Continue to app
      </button>
    </div>
  );
}

export default Uploads;
