import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{
      borderTop: '8px solid #2e7c31'}}>
      <div className="list-books-title">
        <img src={require("../images/book.svg").default} alt="page not found" />
        <h1>
          <Link className="normal-link" to={"/"}>
            <span>MY </span>READS
          </Link>
        </h1>
      </div>
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
            src={require("../images/not-found.jpg").default}
            alt="page not found"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
