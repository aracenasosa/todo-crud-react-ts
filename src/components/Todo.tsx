import React from 'react'
import { ITodo, TodoCompleted, TodoId } from './interfaces/types'

interface TodoProps extends ITodo {
    handleDelete: (id: TodoId) => void;
    handleCompleted: ({ id, status }: TodoCompleted) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, status, handleDelete, handleCompleted }) => {
    return (
        <div>
            <input
                type='checkbox'
                checked={status}
                onChange={e => handleCompleted({ id, status: e.target.checked })}
                className='toggle' />

            <label>{title}</label>

            <button className='destroy' onClick={() => handleDelete({ id })} />
        </div>
    )
}

export default Todo