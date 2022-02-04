import React, { useEffect } from "react";

function AdminTable({ admins }) {
  // useEffect(() => {
  //   console.log(admins);
  // });
  
  return (
    <table className="table mt-3 text-center">
      <thead>
        <tr>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Kategori</th>
        </tr>
      </thead>

      <tbody>
        {admins.map((admin) => {
          return (
            <tr key={admin._id}>
              <td>{admin.name}</td>
              <td>{admin.email}</td>
              <td>{admin.category.name}</td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
};

export default AdminTable;
