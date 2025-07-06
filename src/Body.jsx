import "./Body.css";

import { useEffect, useState } from "react";

import { testTexts } from "./utils/Texts-test";

import TextBox from "./TextBox";
import ImageBox from "./ImageBox";
import { lemme } from "./utils/images";

function Body({ name, navigate, images }) {
  const [num, setNum] = useState(0);
  const click = new Audio("/pen-click.mp3");

  useEffect(() => {
    if (name !== lemme) {
      navigate("/");
    }
    console.log(name);
  }, []);

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
      </div>
    </main>
  );
}

export default Body;
