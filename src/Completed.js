import React, { Component } from 'react';
import autoBind from 'react-autobind';
// import { Dropdown, DropdownMenu } from 'reactstrap';

import './Completed.scss'

class Completed extends Component {
    constructor() {
        super()
        autoBind(this);
        this.state = {
            selected: false,
        };
    }

    render() {
        const completedItems = this.props.completed.map(({desc, createdAt, _id}) => {
            return (
                <li  
                    key={_id} 
                    className="completed-item">
                      {desc}

                    <button className="undo-comp-btn" onClick={ this.props.handleUndoChecked.bind(this, _id) }>
                        <i class="far fa-edit"></i>
                    </button>
                    <button className="del-comp-btn" onClick={ this.props.handleDeleteComplete.bind(this, _id) }>
                    <i class="fas fa-times"></i>
                    </button>
                </li> 
            )
        });
        return (
            <ul className="completed-list">
                <h2>COMPLETED</h2>
                {completedItems}
            </ul>
        )
    }
}

export default Completed;