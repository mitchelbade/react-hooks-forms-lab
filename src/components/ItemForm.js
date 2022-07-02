import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [submitItemForm, setSubmitItem] = useState({
    name: "",
    category: "Produce"
  });

  function handleItemFormChange(event) {
    setSubmitItem({
      ...submitItemForm,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(submitItemForm)
    onItemFormSubmit({
      id: uuid(),
      ...submitItemForm
    });
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={submitItemForm.name} 
        onChange={handleItemFormChange}/>
      </label>

      <label>
        Category:
        <select 
        name="category" 
        value={submitItemForm.category} 
        onChange={handleItemFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
