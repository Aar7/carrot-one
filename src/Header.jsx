import "./Header.css";

function Header({ time }) {
  return (
    <header className="header">
      <p className="header__title">This is the title</p>
      <audio src="/night-snow.mp3" autoplay loop controls />
      <p className="header__time">{time}</p>
    </header>
  );
}

export default Header;
