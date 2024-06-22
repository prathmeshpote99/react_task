import React from "react";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="container">
      <div className="justify-content-center text-center align-items center">
        <Link className="go-home-button" to="/">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default Chat;
