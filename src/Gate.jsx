import "./Gate.css";

function Gate({ name, handleClickGateButton }) {
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
