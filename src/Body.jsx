import "./Body.css";

import { useState } from "react";

import { testTexts } from "./utils/Texts-test";
import { images } from "./utils/images";

import TextBox from "./TextBox";
import ImageBox from "./ImageBox";

function Body() {
  const [num, setNum] = useState(0);
  const click = new Audio("/pen-click.mp3");

  function handleChangeNum() {
    click.play();
    const arrayLen = testTexts.length - 1;
    if (num === arrayLen) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  }

  return (
    <main className="body">
      <div className="body__wrapper">
        <TextBox
          text={testTexts[num].text}
          textIndex={testTexts[num].index}
          handleChangeNum={handleChangeNum}
          framerKey={num}
        />
        <ImageBox textIndex={testTexts[num].index} images={images} />
        {/* <audio src="./public/night-snow.mp3" autoplay loop controls /> */}
      </div>
    </main>
  );
}

export default Body;
