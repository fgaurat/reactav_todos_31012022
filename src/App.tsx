import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { DAO } from './core/DAO';
import { TodoDAO } from './core/TodoDAO';
import { Todo } from './core/Todo';
import HOCCompletedTodoList from './components/HOCCompletedTodoList';

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


  const CompletedTodoList = HOCCompletedTodoList(TodoList)
  return (

    <div className="container-fluid">
      <CompletedTodoList todos={todos}></CompletedTodoList>
    </div>
  );
}

export default App;
