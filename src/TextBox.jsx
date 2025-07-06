import "./TextBox.css";
import { motion, AnimatePresence } from "framer-motion";

function TextBox({ text, handleChangeNum, framerKey }) {
  function handleTextBoxClick(event) {
    console.log(event.target.innerText);
    handleChangeNum();
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={framerKey}
        className="body__wrapper"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.75 }}
      >
        <div className="textbox" onClick={handleTextBoxClick}>
          <p className="textbox__text">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TextBox;
