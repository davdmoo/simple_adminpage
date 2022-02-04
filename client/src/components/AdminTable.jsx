import React from "react";
import { useNavigate } from "react-router-dom";

function AdminTable({ admins }) {
  const navigate = useNavigate();

  const navDetail = (id) => {
    navigate(`/${id}`);
  }
  
  return (
    <table className="table mt-3 text-center">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Kategori</th>
          <th scope="col">Action</th>
        </tr>
      </thead>

      <tbody>
        {admins.map((admin) => {
          return (
            <tr key={admin._id}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.category.name}</td>
              <td>
                <button className="btn btn-warning" onClick={() => navDetail(admin._id)}>Detail</button>
              </td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
};

export default AdminTable;
