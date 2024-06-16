import React, { FormEvent, useState } from 'react'

interface Props {
    saveTodo: (title: string) => void;
}

const Footer: React.FC<Props> = ({ saveTodo }) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        saveTodo(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                className='new-todo'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Qué quieres hacer?'
                autoFocus
            />
        </form>
    )
}

export default Footer