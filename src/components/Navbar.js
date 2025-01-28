import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="dropdown">
          <Link to="#" className="dropdown-toggle">
            Dashboard <i className="fa fa-caret-down"></i>
          </Link>
          <div className="dropdown-content">
            <Link to="/income">Income</Link>
            <Link to="/expense">Expense</Link>
          </div>
        </li>
        <li>
          <Link to="/budgeting">Budgeting</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/login" className="signin-button">
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
