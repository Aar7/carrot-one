import { useState } from "react";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import "./Tutorial.css";

import { tutorial } from "./utils/tutorial-texts";
import { tutImages } from "./utils/tutorial-images";

function Tutorial({ navigate }) {
  const [index, setIndex] = useState(0);

  function handleChangeIndex() {
    const arrayLen = tutorial.length - 1;
    if (index === arrayLen) {
      navigate("/storytime");
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <div>
        <TextBox
          text={tutorial[index].text}
          handleChangeNum={handleChangeIndex}
          framerKey={index}
        />
        <ImageBox textIndex={tutorial[index].index} images={tutImages} />
      </div>
    </>
  );
}

export default Tutorial;
