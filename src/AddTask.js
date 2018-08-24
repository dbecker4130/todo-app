import React from 'react';
import PropTypes from 'prop-types';

import './AddTask.scss';

const AddTask = (props) => {
    return (
        <div className="AddTask">
            <h1>MY SHIT LIST</h1>
            <form onSubmit={ props.handleSubmit }>
                <input
                    placeholder="title?"
                    type="text"
                    name="title"
                    onChange={ props.handleChange }
                    value={ props.title }
                    />

                <input
                    placeholder="what about it?"
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
    title: PropTypes.string,
    desc: PropTypes.string
}

export default AddTask;