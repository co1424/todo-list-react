export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)} //This is check and uncheck the box.
        />
        {title}
      </label>
      {/* This is passing in a function to delete a current todo item. */}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete Item
      </button>
    </li>
  );
}
