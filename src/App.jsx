import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Tutorial from "./Tutorial";

function App() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  let input = "";

  function handleClickButton() {
    while (!input) {
      input = prompt("Type the right word to enter:");
    }
    setName(input);
  }

  while (name !== "Rayhanah") {
    return (
      <>
        <button
          type="button"
          className="startButton"
          onClick={handleClickButton}
        >
          Click me 😃
        </button>

        <p className="wrong">{name ? `${name} is invalid` : ""}</p>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Tutorial navigate={navigate} />} />
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
