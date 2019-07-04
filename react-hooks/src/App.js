import React, { useState } from 'react';

import './App.css';

function Todo({ todo, index }) {
  return <div className="todo">{todo.text}</div>
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Todo 1',
      isComplete: false
    },
    {
      text: 'Todo 2',
      isComplete: false
    },
    {
      text: 'Todo 3',
      isComplete: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => <Todo key={index} index={index} todo={todo} />)}
      </div>
    </div>
  );
}

export default App;
