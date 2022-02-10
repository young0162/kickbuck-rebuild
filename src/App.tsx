import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrap from "./layouts/Wrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
