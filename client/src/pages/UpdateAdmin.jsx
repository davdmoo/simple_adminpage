import React, { useState } from "react";

function UpdateAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const updateAdmin = (event) => {
    event.preventDefault();
    
    console.log({ name, email, phoneNumber });
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "88vh" }}>
      <div>
        <h1 className="text-center">Add menu</h1>
        <form onSubmit={updateAdmin} className="mb-3">
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

        {/* <div className="mb-3">
          <label>Category</label>
          <select required value={categoryId} onChange={handleCategoryChange} className="mb-3" style={{
            marginLeft: "1rem"
          }}>
            <option value="">Select a category..</option>
            {categories.map(cat => {
              return <option key={cat.id} value={cat.id}>{cat.name}</option>
            })}
          </select>
        </div> */}

        {/* {ingredients.map((ingredient, idx) => {
          return (
            <div className="mb-3" key={idx}>
              <label className="form-label">Ingredient</label>
              <input style={{marginLeft: "1rem"}} name="name" value={ingredient.name} onChange={(event) => handleIngredientsChange(event, idx)} className="" type="text" placeholder="Input ingredient"></input>
              {ingredients.length !== 1 && <button style={{marginLeft: "1rem"}} onClick={(event) => removeIngredientInput(idx)} className="btn btn-warning btn-sm">Remove</button>}
              {ingredients.length - 1 === idx && <button style={{marginLeft: "1rem"}} onClick={addIngredientInput} className="btn btn-primary btn-sm">Add</button>}
            </div>
          )
        })} */}

        <button className="btn btn-primary" type="submit">Update</button>
        </form>

      </div>
    </div>
  )
}

export default UpdateAdmin;
