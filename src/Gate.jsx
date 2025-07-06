import { useEffect } from "react";
import "./Gate.css";
import { lemme } from "./utils/images";

function Gate({ name, setName, navigate }) {
  let input = "";

  function handleClickGateButton() {
    // loops if input is empty
    while (!input) {
      input = prompt("Type the right word to enter:");
    }
    setName(input);
  }

  useEffect(() => {
    console.log(name);
    console.log(lemme);
    console.log(name == lemme);
    if (name == lemme) {
      localStorage.setItem("name", name);
      navigate("/tutorial");
    }
  }, [name]);
  return (
    <>
      <button
        type="button"
        className="startButton"
        onClick={handleClickGateButton}
      >
        Click me 😃
      </button>

      <p className="wrong">{name ? `${name} is invalid` : ""}</p>
    </>
  );
}

export default Gate;
