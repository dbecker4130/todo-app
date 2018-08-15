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
                    <label className="check-container">{task}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    
                    <button onClick={ props.handleDelete.bind(this, task) }>
                        Delete
                    </button>
                    <button>
                        Edit
                    </button>
                    </label>
                
                </li>
            ))}
        </ul>
    )
}

List.propTypes = {
    handleDelete: PropTypes.func.isRequired
}

export default List;