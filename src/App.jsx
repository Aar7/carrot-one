import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Tutorial from "./Tutorial";
import Gate from "./Gate";
import Uploads from "./Uploads";
import Redirect404 from "./Redirect404";

function App() {
  const [images, setImages] = useState([]);
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Gate name={name} setName={setName} navigate={navigate} />}
        />
        <Route
          path="/tutorial"
          element={<Tutorial name={name} navigate={navigate} />}
        />
        <Route
          path={"/uploads"}
          element={
            <Uploads
              name={name}
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
              <Body name={name} navigate={navigate} images={images} />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Redirect404 />} />
      </Routes>
    </>
  );
}

export default App;
