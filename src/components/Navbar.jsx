import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSiderbar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  const closeSidebar = () => {
    setShowSiderbar(false);
  };
  const location = useLocation();
  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          F<span>oo</span>dHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">Settings</a> */}
        </div>
        <div
          onClick={() => setShowSiderbar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
};

export default Navbar;
