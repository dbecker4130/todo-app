import React from 'react';
import PropTypes from 'prop-types';

import './AddTask.scss';

const AddTask = (props) => {
    return (
        <div className="AddTask">
            <h1>{props.title}</h1>
            {/* In Line Edit */}
            <form onSubmit={ props.handleSubmit }>

                <input
                    placeholder="what is it?"
                    type="text"
                    name="desc"
                    onChange={ props.handleChange }
                    value={ props.desc }
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
    desc: PropTypes.string
}

export default AddTask;