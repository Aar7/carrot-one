import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [name, setName] = useState("");
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
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
