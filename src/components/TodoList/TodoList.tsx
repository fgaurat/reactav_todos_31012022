import React, { useEffect, useState } from 'react';
import { TodoDAOContext } from '../../App';
import { Todo } from '../../core/Todo';
import TodoRow from './TodoRow';

interface TodoListProps {
    todos: Todo[];
}

const TodoList = ({todos}:TodoListProps) => {

  // const contextDAO = React.useContext(TodoDAOContext);



  return <div>
    TodoList

    <table className="table">
      <thead></thead>
      <tbody>
      {todos.map((todo:Todo) => <TodoRow key={todo.id} todo={todo}></TodoRow>)}
      </tbody>

    </table>

  </div>;
};

export default TodoList;
