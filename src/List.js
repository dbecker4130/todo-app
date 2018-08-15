import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
    return (
        <ul>
            { props.tasks.map((
                task, index
            ) => (
                <li key={index}>
                    {task}
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