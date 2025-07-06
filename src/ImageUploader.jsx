import { useState } from "react";
import "./ImageUploader.css";

function ImageUploader({ onImagesReady }) {
  const [images, setImages] = useState([]);

  function handleUpload(e) {
    const files = Array.from(e.target.files);
    const readers = files.map((file, i) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve({
            id: `img-${i}`, // ← custom ID or use something like uuid
            name: file.name,
            index: i,
            src: event.target.result,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then((results) => {
      setImages(results);
      onImagesReady(results); // parent gets the array too
    });
  }

  return (
    <div>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleUpload}
        className="imageuploader__input"
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "1rem",
          gap: "1rem",
        }}
      >
        {images.map((img, idx) => (
          <div key={img.id} style={{ textAlign: "center" }}>
            <img src={img.src} alt={img.name} style={{ width: "100px" }} />
            <div style={{ fontSize: "0.8rem" }}>#{img.index}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;
