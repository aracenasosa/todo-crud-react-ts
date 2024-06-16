import React from 'react'
import { FilterValue } from './interfaces/types';
import { TODO_BUTTONS_FILTER } from '../consts/consts';

interface Props {
    filterSelected: FilterValue;
    onFilterChange: (filter: FilterValue) => void;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className='filters'>
            {
                Object.entries(TODO_BUTTONS_FILTER).map(([key, { literal, href }]) => {
                    //const isSelected = key === filterSelected;
                    const className = filterSelected === 'all' ? 'selected' : '';
                    return (
                        <li key={key}>
                            <a className={className}
                                href={href}
                                onClick={e => {
                                    e.preventDefault();
                                    onFilterChange(key as FilterValue)
                                }}>
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Filters