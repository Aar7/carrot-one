import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  return (
    <>
      <Header time={time} />
      <Body />
      <Footer />
      <Routes>
        <Route path="/" />
      </Routes>
    </>
  );
}

export default App;
