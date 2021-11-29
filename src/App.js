import React, { Component } from "react";
import { useState } from 'react'
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [todoItems, setTodoItems] = useState({})

  addToDoItems = item => {
    const items = { ...todoItems };
    console.log(items);
    items[`item${Date.now()}`] = item;
    setTodoItems({ items });
  };

  removeToDoItem = item => {
    const todos = { ...todoItems };
    delete todos[item];
    setTodoItems({ todos });
  };

  updateTodos = (key, updatedTodo) => {
    const todos = { ...todoItems };
    todos[key] = updatedTodo;
    setTodoItems({ todos });
  };

  return (
    <div className="App">
      <TodoForm addToDoItems={addToDoItems} />
      <ul>
        {Object.keys(todoItems).map(key => (
          <TodoList
            key={key}
            index={key}
            todoItems={todoItems[key]}
            removeToDoItem={removeToDoItem}
            updateTodos={updateTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
