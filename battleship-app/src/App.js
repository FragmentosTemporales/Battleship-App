import injectContext from "./store/context";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import UserBoard from "./views/UserBoard";
import CpuShowBoard from "./views/CpuBoard";

function App() {
  return (
    <div className="bg-secondary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<UserBoard />} />
          <Route path="/cpu" element={<CpuShowBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
