import React from 'react';
import PropTypes from 'prop-types';

import './List.scss'

const List = (props) => {
    return (
        <ul className="List">
            { props.tasks.map((
                task, index
            ) => (
                <li key={index} className="todo-item">
                    <input type="checkbox" />
                        <label>{task}</label>
                    <button onClick={ props.handleDelete.bind(this, task) }>
                        Delete
                    </button>
                
                </li>
            ))}
        </ul>
    )
}

List.propTypes = {
    handleDelete: PropTypes.func.isRequired
}

export default List;