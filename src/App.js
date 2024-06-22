import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "typeface-inter";
import Home from "./components/Home";
import NewsFeed from "./components/NewsFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newsfeed" element={<NewsFeed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
