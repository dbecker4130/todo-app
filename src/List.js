import React from 'react';
import PropTypes from 'prop-types';

import './List.scss'



const List = (props) => {
    const items = props.tasks.map(({desc, _id, createdAt}) => {
        return (
            <li key={_id} className="todo-item">
                <label className="check-container">
                    {desc}
                    <input id="todo-checkbox" type="checkbox" onClick={ props.handleChecked.bind(this, _id) }/>
                    <span className="checkmark"></span>

                    <button onClick={ props.handleDelete.bind(this, _id) }>
                        Delete
                    </button>
                </label>
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
    handleChecked: PropTypes.func.isRequired,
}

export default List;