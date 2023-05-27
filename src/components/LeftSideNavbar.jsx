import React from "react";
import { FaTags, FaClipboardList } from "react-icons/fa";


function LeftSideNavbar() {
  return (
    <div className="left-side-navbar">
      <button className="nav-button">
        <FaTags className="nav-icon" />
        Tags
      </button>
      <button className="nav-button">
        <FaClipboardList className="nav-icon" />
        Quizes
      </button>
    </div>
  );
}

export default LeftSideNavbar;
