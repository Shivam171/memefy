import React from "react";
import Meme from "./Meme/Meme";
import MemeGenerated from "./MemeGenerated/MemeGenerated";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Meme />} />
      <Route path="/generated" element={<MemeGenerated />} />
    </Routes>
  );
}

export default App;
