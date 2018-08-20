import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.scss'

const Dropdown = (props) => {
    console.log('dropdown props', props.completed)
    const completedItems = props.completed.map(({desc, _id, createdAt }) => {
        return (
            <li key={_id} className="completed-item">
                {desc}{createdAt}
            </li>
        )
    });
    return (
        <ul className="Dropdown">
            {completedItems}
        </ul>
    )
}

export default Dropdown;