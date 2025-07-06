import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Tutorial from "./Tutorial";
import Gate from "./Gate";
import Uploads from "./Uploads";

function App() {
  const [images, setImages] = useState([]);

  const [name, setName] = useState("");
  const navigate = useNavigate();
  let input = "";

  function handleClickGateButton() {
    while (!input) {
      input = prompt("Type the right word to enter:");
    }
    setName(input);
  }

  useEffect(() => {
    console.log(images);
  }, [images]);

  while (name !== "Rayhanah") {
    return (
      <>
        <Gate name={name} handleClickGateButton={handleClickGateButton} />
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Tutorial navigate={navigate} />} />
        <Route
          path={"/uploads"}
          element={
            <Uploads
              images={images}
              setImages={setImages}
              navigate={navigate}
            />
          }
        />
        <Route
          path="/storytime"
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
