import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MapDemo from "./components/MapDemo";
import ChartDemo from "./components/ChartDemo";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/charts" element={<ChartDemo />} />
          <Route path="/maps" element={<MapDemo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
