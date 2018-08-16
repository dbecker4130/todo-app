import React from 'react';
import PropTypes from 'prop-types';

import './List.scss'


const List = (props) => {
    const items = props.tasks.map(({desc, _id, createdAt}) => {
        return (
            <li key={_id} className="todo-item">
                <label className="check-container">
                    {desc}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>

                <button onClick={ props.handleDelete.bind(this, _id) }>
                    Delete
                </button>
            </li>
        )
    });
    return (
        <ul className="List">
            {items}
        </ul>
    )
}

List.propTypes = {
    handleDelete: PropTypes.func.isRequired,
}

export default List;