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
            <Link to="/Books" className="btn btn-light Books">
              Books
            </Link>
          </li>
        </ul>
      </nav>
      <Body />
    </div>
  );
}

export default Navbar;
