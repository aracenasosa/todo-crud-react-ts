import React from 'react'
import { ITodo, TodoCompleted, TodoId } from './interfaces/types'
import Todo from './Todo'

interface TodosProps {
    todos: ITodo[];
    handleDelete: ({ id }: TodoId) => void;
    handleCompleted: ({ id, status }: TodoCompleted) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, handleDelete, handleCompleted }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo =>
                <li key={todo.id} className={`${todo.status ? 'completed' : ''}`}>
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        status={todo.status}
                        handleDelete={handleDelete}
                        handleCompleted={handleCompleted}
                    />
                </li>
            )}

        </ul>
    )
}

export default Todos