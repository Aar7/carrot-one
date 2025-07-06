import { useEffect, useState } from "react";
import "./ImageBox.css";
import { motion, AnimatePresence } from "framer-motion";

function ImageBox({ textIndex, images }) {
  useEffect(() => {
    console.log(images[textIndex]);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={textIndex}
          className="body__wrapper"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.75 }}
        >
          <img
            className="imagebox"
            src={images[textIndex]?.src}
            alt={`${images[textIndex]?.alt}`}
          />
        </motion.div>
      </AnimatePresence>
      {images[textIndex]?.src == undefined && (
        <p className="imagebox__reupload">
          Some images did not load properly.{" "}
          <a href="/uploads" className="imagebox__link">
            Click here
          </a>{" "}
          to re-upload
        </p>
      )}
    </>
  );
}

export default ImageBox;
