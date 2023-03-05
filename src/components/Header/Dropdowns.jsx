import React, { useState } from "react";
import { Link } from "react-router-dom";
import { homeDropdown } from "../Header/NavItems";
export const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {homeDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => {
                  setClick(false);
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
