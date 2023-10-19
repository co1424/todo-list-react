import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState(""); //This is the default value for the add new item input.

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem(""); //this clears out the input box after passing in a new item.
  }
  
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
      <h1 className="">To-Do List</h1>
        <label htmlFor="item">Add a new to-do item below:  </label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} //Getting the new value, setting as newItem value and placing it in the input.
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add to List</button>
    </form>
  );
}
