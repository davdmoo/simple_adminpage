import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { updateAdmin, getAdmin, getCategories } from "../stores/actionCreator";

function UpdateAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categories } = useSelector(state => state);
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const updateAdminHandler = (event) => {
    event.preventDefault();
    const payload = { name, email, phoneNumber, category };
    
    dispatch(updateAdmin(id, payload))
      .finally(() => {
        navigate("/");
      })
  };

  useEffect(() => {
    dispatch(getCategories());

    dispatch(getAdmin(id))
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setCategory(data.category._id);
      })
  }, [dispatch, id]);
  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "88vh" }}>
      <div>
        <h1 className="text-center mb-4">Update Admin</h1>

        <form onSubmit={updateAdminHandler} className="mb-3">
          <div className="mb-3">
              <label className="form-label">Nama</label>
              <input required value={name} onChange={handleNameChange} className="form-control" type="text" placeholder="Menu name"></input>
          </div>

          <div className="mb-3">
              <label className="form-label">Email</label>
              <input required value={email} onChange={handleEmailChange} className="form-control" type="text" placeholder="Menu description"></input>
          </div>

          <div className="mb-3">
              <label className="form-label">Nomor Telepon</label>
              <input required value={phoneNumber} onChange={handlePhoneNumberChange} className="form-control" type="text" placeholder="Menu image"></input>
          </div>

          <div className="mb-3">
            <label>Category</label>
            <select required value={category} onChange={handleCategoryChange} className="mb-3" style={{
              marginLeft: "1rem"
            }}>
              <option value="">Select a category..</option>
              {categories.map(cat => {
                return <option key={cat._id} value={cat._id}>{cat.name}</option>
              })}
            </select>
          </div>
          
          <Link to="/" style={{ marginRight: "1rem" }}>
            <button className="btn btn-light border border-dark">Batalkan</button>
          </Link>

          <button className="btn text-light" style={{ backgroundColor: "#191970" }} type="submit">Simpan</button>
        </form>

      </div>
    </div>
  )
}

export default UpdateAdmin;
