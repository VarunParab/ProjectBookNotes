import React from "react";
import { Link } from "react-router-dom";
import Body from "./Body";
function Navbar() {
  return (
    <div className="index">
      <nav>
        <ul className="nav">
          <li>
            <Link to="/" className="Home">
              📚BookNotes
            </Link>
          </li>
          <li>
            <Link to="/allNotes" className="btn btn-light All-Notes">
              All Notes
            </Link>
          </li>
        </ul>
      </nav>
      <Body />
    </div>
  );
}

export default Navbar;
