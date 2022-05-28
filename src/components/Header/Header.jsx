import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shoes">Shoes</NavLink>
        </nav>
      </div>
    );
  }
}
