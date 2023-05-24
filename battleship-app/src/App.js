import injectContext from "./store/context";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import UserBoard from "./views/UserBoard";
import GameShowBoard from "./views/GameBoard";

function App() {
  return (
    <div 
    style={{ background: "url(https://wallpapercave.com/wp/wp8818393.jpg)", backgroundPosition: "center",
    backgroundRepeat: "no-repeat", }}

    className="bg-secondary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<UserBoard />} />
          <Route path="/gameboard" element={<GameShowBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
