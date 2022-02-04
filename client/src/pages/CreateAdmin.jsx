import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin, getCategories } from "../stores/actionCreator";

function CreateAdmin() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  const postAdmin = (event) => {
    event.preventDefault();
    
    dispatch(createAdmin({ name, email, phoneNumber, category }))
      .finally(() => {
        setName("");
        setPhoneNumber("");
        setEmail("");
        setCategory("");

        navigate("/");
      })
  };

  const cancelCreate = () => {
    navigate("/");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "88vh" }}>
      <div>
        <h1 className="text-center mb-5" style={{ color: "#191970" }}>Tambah Admin</h1>

        <form onSubmit={postAdmin} className="mb-3">
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

          <div className="d-flex justify-content-end mt-4">
            <Link to="/" style={{ marginRight: "1rem" }}>
                <button onClick={cancelCreate} className="btn btn-light border border-dark">Batalkan</button>
            </Link>

            <button className="btn text-light" type="submit" style={{ backgroundColor: "#191970" }}>Simpan</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default CreateAdmin;
