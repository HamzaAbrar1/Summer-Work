import React from "react";
import "./hed.css";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="outer">
      <div className="firstItem">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="SecondItem">
        <NavLink to="/contact">contactUs</NavLink>
      </div>
      <div className="thirdItem">
        <NavLink to="/about">about us</NavLink>
      </div>
    </div>
  );
}
