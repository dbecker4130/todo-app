import React from 'react';
import PropTypes from 'prop-types';

import './AddTask.scss';

const AddTask = (props) => {
    return (
        <div className="AddTask">
            <h1>MY SHIT LIST</h1>
            <form onSubmit={ props.handleSubmit }>
                <input
                    placeholder="what is it?"
                    type="text"
                    onChange={ props.handleChange }
                    value={ props.task }
                    />
                <button
                    onClick={ props.handleSubmit }>
                    Add 
                </button>
            </form>
        </div>
    )
}

AddTask.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    task: PropTypes.string,
}

export default AddTask;