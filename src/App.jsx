// For more information about this project go to: https://www.youtube.com/watch?v=Rh3tobg7hEo 
// This is my first React app based on the tutorial shown above. 

import { useEffect, useState } from "react";
import "../src/styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  //useState is checking for local storage!
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  // This is to setup localStorage to store the items in our list on a local computer.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // This function is in charge of checking and unckecking items:
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    //IF YOU WANT TO RETURN MULTIPLE ELEMENTS IN A COMPONET, USE <>!
    <>
      {/* This is importing the form onto the main app file. */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
