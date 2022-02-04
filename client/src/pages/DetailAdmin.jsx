import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getAdmin } from "../stores/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdmin } from "../stores/actionCreator";

function DetailAdmin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { admin } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAdmin(id))
  }, [dispatch, id]);

  const deleteAdminHandler = () => {
    dispatch(deleteAdmin(id))
      .finally(() => {
        navigate("/");
      })
  }

  return (
    <div className="container mt-3">
      <div className="text-center">
        <h2 style={{ color: "#191970" }}>Detail admin page</h2>
      </div>
      
      <div className="d-flex justify-content-end border-bottom border-dark p-2">
        <Link to ={ `/update/${id}` }>
          <button className="btn btn-light border border-primary" style={{ color: "#191970", marginRight: "1rem" }}>Edit Profil</button>
        </Link>
        <button onClick={deleteAdminHandler} className="btn btn-light border border-danger">Hapus</button>
      </div>

      <div className="d-flex flex-column" style={{ width: "400px" }}>
        
        <h3 className="mt-3" style={{ color: "#191970" }}>{admin.name}</h3>
        
        <div className="d-flex justify-content-between mb-2">
          <span>Role</span>
          {admin.category ? <span>{admin.category.name}</span> : <span>admin</span> }
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Email address</span>
          <span>{admin.email}</span>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <span>Phone Number</span>
          <span>{admin.phoneNumber}</span>
        </div>
      </div>
    </div>
  )
};

export default DetailAdmin;
