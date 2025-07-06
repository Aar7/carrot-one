import "./Redirect404.css";

function Redirect404() {
  return (
    <div className="redirect">
      Uh oh...you got lost. Click{" "}
      <a href="/" className="redirect__link">
        here{" "}
      </a>{" "}
      to go back home
    </div>
  );
}

export default Redirect404;
