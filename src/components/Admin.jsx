import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const location = useLocation();

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <Link
          to="/admin"
          className={location.pathname === "/admin" ? "nav-link active" : "nav-link"}
        >
          Users
        </Link>
        <Link
          to="/admin/products"
          className={location.pathname.includes("/products") ? "nav-link active" : "nav-link"}
        >
          Products
        </Link>
        <Link
          to="/admin/orders"
          className={location.pathname.includes("/orders") ? "nav-link active" : "nav-link"}
        >
          Orders
        </Link>
      </nav>
      <div className="admin-outlet">
        <Outlet />
      </div>
    </div>
  );
}
