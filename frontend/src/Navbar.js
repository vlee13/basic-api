import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/student-list">All Students List</Link> |
        <Link to="/randomize">Random Student</Link>
      </div>
    </div>
  );
};

export default Navbar;
