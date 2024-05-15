import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos((prevTodos) => [...prevTodos, newTodo].sort());
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="What Will You Do?"
          value={newTodo}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>+</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button  onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
