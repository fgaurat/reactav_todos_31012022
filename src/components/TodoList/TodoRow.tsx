import React from 'react';
import { Todo } from '../../core/Todo';


interface TodoProps {
    todo: Todo;
}

const TodoRow = ({todo}:TodoProps) => {
  
    return( 
    <tr >
        <td >{todo.id}</td>
        <td >{todo.title}</td>
        <td >{todo.completed}</td>
      </tr>)
};

export default TodoRow;
