import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import "./Header.css";

export default function Header() {
  const { user } = useContext(AppContext);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">MERN<span>Shop</span></Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/order">Orders</Link>
          {user?.role === "admin" && <Link to="/admin">Admin</Link>}
          {user?.token ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
