import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex justify-content-between bg-light p-3">
      <Link className="nav-link" to="/">
        <h2 style={{ color: "#191970" }}>Administrator Database</h2>
        <span className="text-muted">Pengaturan administrator</span>
      </Link>

      <Link className="d-flex align-items-center nav-link" to="/create-admin">
        <button className="btn text-light" style={{ backgroundColor: "#191970" }}>Tambah Admin</button>
      </Link>
    </div>
  )
};

export default Navbar;
