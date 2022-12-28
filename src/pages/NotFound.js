import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-10">
      
      <div className="flex flex-center align-item-center flex-wrap mt-3">
        <div style={{marginBottom: '20px'}}>
          <span className="error-404">
            4<span className="error-404 error-0">0</span>4
          </span>
          <span className="error-text">error</span>
          <h3>Your Page Not Found</h3>

          <Link to={"/"} className="home-btn">
            Back to home
          </Link>
        </div>
        <div className="img-container">
          <img
            src={require("../images/not-found.png")}
            alt="page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
