import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';

import './Completed.scss'


const Completed = (props) => {
    const completedItems = props.completed.map(({desc, createdAt, _id}) => {
        return (
            <li  
                key={_id} 
                className="completed-item">
                    {desc}

                <button className="undo-comp-btn" onClick={ props.handleUndoChecked.bind(this, _id) }>
                    <i className="fas fa-undo"></i>
                </button>
                <button className="del-comp-btn" onClick={ props.handleDeleteComplete.bind(this, _id) }>
                <i className="fas fa-times"></i>
                </button>
                <div className="date-created">
                        { createdAt.toString().slice(6, 10) }
                </div>
            </li> 
        )
    });
    return (
        <ul className="completed-list">
            <h1>COMPLETED</h1>
            {completedItems}
        </ul>
    )
}

Completed.propTypes = {
    handleDeleteComplete: PropTypes.func.isRequired,
    handleUndoChecked: PropTypes.func.isRequired,
}


export default Completed;