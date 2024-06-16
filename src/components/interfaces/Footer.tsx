import React from 'react'
import Filters from '../Filters'
import { FilterValue } from './types';

interface Props {
    activeCount: number;
    completedCount: number
    filterSelected: FilterValue;
    onClearCompleted: () => void;
    handleFilterChange: (filter: FilterValue) => void;
}

const Footer: React.FC<Props> = ({ activeCount = 0, completedCount, filterSelected, onClearCompleted, handleFilterChange }) => {
    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> pending tasks
            </span>

            <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

            {
                completedCount > 0 && (
                    <button className='clear-completed' onClick={onClearCompleted}>
                        Remove completed
                    </button>
                )
            }
        </footer>
    )
}

export default Footer