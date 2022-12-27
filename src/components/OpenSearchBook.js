import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const OpenSearchBook = () => {
  return (
    <div className="open-search">
      <Link to="/search" title="search" className="inline-block py-3 px-4 text-lg hover:shadow-slate-400 hover:shadow-md transition-all duration-150">
        <FontAwesomeIcon icon={solid("magnifying-glass-plus")} />
      </Link>
    </div>
  );
};

export default OpenSearchBook;
