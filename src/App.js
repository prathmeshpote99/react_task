import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "typeface-inter";
import Home from "./components/Home";
import NewsFeed from "./components/NewsFeed";
import Connections from "./components/Connections";
import Lawyer from "./components/lawyer";
import Chat from "./components/Chat";
import Setting from "./components/Setting";
import Notifications from "./components/Notifications";
import Ava from "./components/Avatar";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newsfeed" element={<NewsFeed />} />
        <Route exact path="/connections" element={<Connections />} />
        <Route exact path="/find-lawyers" element={<Lawyer />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/settings" element={<Setting />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/profile" element={<Ava />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
