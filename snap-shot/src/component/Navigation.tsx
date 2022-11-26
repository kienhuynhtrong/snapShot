import React from "react";
import { NavLink } from "react-router-dom";

const NavigationFilter = () => {
  return (
    <div className="snap_wrap_search-navigation">
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/mountain">Mountain</NavLink>
          </li>
          <li>
            <NavLink to="/beach">Beaches</NavLink>
          </li>
          <li>
            <NavLink to="/bird">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavigationFilter;
