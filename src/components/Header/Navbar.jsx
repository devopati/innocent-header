import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../Header/NavItems";
import { Dropdown } from "../Header/Dropdowns";
import "../Header/navbar.css";
{
  /*import logo from "../../public/images/logo.png";*/
}
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <div className="nav-top">
        <div className="nav-top-content">
          <h3>We are Best in Town With 40 Years of Experience</h3>
          <br />
        </div>
      </div>
      <header className="navbar">
        <Link to="/" className="navbar-logo">
          <h3>header</h3>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item, index) => {
            if (item.title === "Home") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={item.linkClass}
                    onClick={closeMobileMenu}
                  >
                    {item.title} <i className={item.iconClass} />
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            } else if (item.title === "Listing") {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={item.linkClass}
                    onClick={closeMobileMenu}
                  >
                    {item.title} <i className={item.iconClass} />
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            } else if (item.title === "Properties") {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={item.linkClass}
                    onClick={closeMobileMenu}
                  >
                    {item.title} <i className={item.iconClass} />
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            } else if (item.title === "Features") {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={item.linkClass}
                    onClick={closeMobileMenu}
                  >
                    {item.title} <i className={item.iconClass} />
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.index} className={item.cName}>
                <Link
                  to={item.path}
                  className={item.linkClass}
                  onClick={closeMobileMenu}
                >
                  {item.title} <i className={item.iconClass} />
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
