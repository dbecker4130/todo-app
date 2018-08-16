import React from 'react';
import PropTypes from 'prop-types';

import './AddTask.scss';

const AddTask = (props) => {
    return (
        <div className="AddTask">
            <h1>MY LIST</h1>
            <input
                placeholder="what is it?"
                onChange={ props.handleChange }
                value={ props.task }
                />
            <button
                onClick={ props.handleSubmit }
                >
                Add 
            </button>
        </div>
    )
}

AddTask.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    task: PropTypes.string,
}

export default AddTask;