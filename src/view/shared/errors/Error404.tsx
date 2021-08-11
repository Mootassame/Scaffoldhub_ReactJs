import React from "react";
import { Link } from "react-router-dom";
import { i18n } from "src/i18n";

const Error404Page = () => {
  return (
    <div className="exception">
      <div className="content">
        <h1>404</h1>
        <div className="desc">404</div>
        <div className="actions">
          <Link to="/">
            <button className="btn btn-primary" type="button">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404Page;
