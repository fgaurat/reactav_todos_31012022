import React from 'react';
import { Todo } from '../../core/Todo';

interface TodoListProps {
    todos: Todo[];
}

const TodoList = ({todos}:TodoListProps) => {

  return <div>
    TodoList
    <ul>
      {todos.map((todo:Todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>

  </div>;
};

export default TodoList;
