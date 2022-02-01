import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { DAO } from './core/DAO';
import { TodoDAO } from './core/TodoDAO';
import { Todo } from './core/Todo';

function App() {
  
  const todoDAO:DAO = new TodoDAO()
  const [todos,setTodos] = useState<Todo[]>([])

  useEffect(() => {
    (async function anyNameFunction() {
      const t = await todoDAO.getAll()
      setTodos(t)
    })();
  },[])

  return (
    <div className="container-fluid">
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
