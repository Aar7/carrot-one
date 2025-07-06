import { useEffect, useState } from "react";
import "./ImageBox.css";
// import { images } from "./utils/images";
import { motion, AnimatePresence } from "framer-motion";

function ImageBox({ textIndex, images }) {
  // const [image, setImage] = useState("");

  useEffect(() => {
    console.log(images[textIndex]);
  }, []);
  return (
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
          src={images[textIndex].image}
          alt={`${images[textIndex].alt}`}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageBox;
