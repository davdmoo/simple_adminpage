import React from "react";

function DetailAdmin() {
  return (
    <div className="container mt-3">
      <div className="text-center">
        <h2 style={{ color: "#191970" }}>Detail admin page</h2>
      </div>
      
      <div className="d-flex justify-content-end border-bottom border-dark p-2">
        <button className="btn btn-light border border-primary" style={{ color: "#191970", marginRight: "1rem" }}>Edit Profil</button>
        <button className="btn btn-light border border-danger">Hapus</button>
      </div>

      <div className="d-flex flex-column" style={{ width: "300px" }}>
        
        <h3 className="mt-3" style={{ color: "#191970" }}>Warta Kurnia Narpati</h3>
        
        <div className="d-flex justify-content-between mb-2">
          <span>Role</span>
          <span>admin 1</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Email address</span>
          <span>mail@example.com</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Phone Number</span>
          <span>081212124563</span>
        </div>
      </div>
    </div>
  )
};

export default DetailAdmin;
