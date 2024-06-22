import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "typeface-inter";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
