import "./Body.css";

import { useState } from "react";

import TextBox from "./TextBox";
import { testTexts } from "./utils/Texts-test";
import ImageBox from "./ImageBox";

function Body() {
  const [num, setNum] = useState(0);

  function handleChangeNum() {
    setNum(num + 1);
  }

  return (
    <main className="body">
      <div className="body__wrapper">
        <TextBox text={testTexts[num]} handleChangeNum={handleChangeNum} />
        <ImageBox />
      </div>
    </main>
  );
}

export default Body;
