import React from "react";
import { Link } from "react-router-dom";
import "./Header";
const Header = () => {
  return (
    <div>
      <div className="items mb-5 mt-3">
        <Link className="item m-2 p-2" to="/home">
          Home
        </Link>
        <Link className="item m-2 p-2" to="/blog">
          Blog
        </Link>
        <Link className="item m-2 p-2" to="/About">
          About Us
        </Link>
        <Link className="item m-2 p-2" to="/addUser">
          AddUser
        </Link>
        <Link className="item m-2 p-2" to="/products">
          Products
        </Link>
        <Link className="item m-2 p-2" to="/dashboard">
          Admin Dashboard
        </Link>
        <Link className="item m-2 p-2" to="/update">
          update
        </Link>
      </div>
    </div>
  );
};

export default Header;
