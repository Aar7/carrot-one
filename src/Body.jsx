import "./Body.css";

import { useState } from "react";

import TextBox from "./TextBox";
import { testTexts } from "./utils/Texts-test";
import ImageBox from "./ImageBox";

function Body() {
  const [num, setNum] = useState(0);

  function handleChangeNum() {
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
        <ImageBox textIndex={testTexts[num].index} />
      </div>
    </main>
  );
}

export default Body;
