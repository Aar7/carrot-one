import "./Header.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Header({ time }) {
  return (
    <header className="header">
      <p className="header__title">Happy Anniversary</p>
      <div className="audio__player">
        <AudioPlayer
          src="/night-snow.mp3"
          className="audio__player"
          onPlay={(e) => console.log("Playing")}
          autoPlay={true}
          loop={true}
        />
      </div>
      {/* <p className="header__time">{time}</p> */}
    </header>
  );
}

export default Header;
