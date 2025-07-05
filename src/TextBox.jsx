import "./TextBox.css";

function TextBox({ text, handleChangeNum }) {
  function handleTextBoxClick(event) {
    console.log(event.target.innerText);
    handleChangeNum();
  }
  return (
    <div className="textbox" onClick={handleTextBoxClick}>
      <p className="textbox__text">{text}</p>
    </div>
  );
}

export default TextBox;
