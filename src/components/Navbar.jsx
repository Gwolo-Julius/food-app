import React, { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSiderbar]=useState(false)
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span>oo</span>dHub
      </a>
      <div className="nav-links">
        <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a>
      </div>
      <div onClick={()=>setShowSiderbar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
