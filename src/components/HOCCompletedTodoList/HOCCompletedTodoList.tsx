import { Todo } from '../../core/Todo';

interface TodoListProps {
    todos: Todo[];
}

const HOCCompletedTodoList = (TodoList:any) => {
    

    return (props:TodoListProps) => {
        const completedTodos = props.todos.filter((todo:Todo) => todo.completed)
        return <TodoList todos={completedTodos}></TodoList>
    }

};

export default HOCCompletedTodoList;
