import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { DAO } from './core/DAO';
import { TodoDAO } from './core/TodoDAO';
import { Todo } from './core/Todo';

const todoDAO:DAO = new TodoDAO()
export const TodoDAOContext = React.createContext(todoDAO);

function App() {
  
  const [todos,setTodos] = useState<Todo[]>([])

  useEffect(() => {
    (async function anyNameFunction() {
      const t = await todoDAO.getAll()
      setTodos(t)
    })();
  },[])

  return (

    <div className="container-fluid">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
