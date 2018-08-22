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

    selectItem(_id) {
        console.log('incoming ID', _id)
        console.log('props coming in', this.props.completed)
        const index = this.props.completed.findIndex(a => a._id === _id)
        console.log('INDEX', index)
        if (index === -1) return;

    }

    render() {
        const completedItems = this.props.completed.map(({desc, createdAt, _id}) => {
            return (
                <li  
                    key={_id} 
                    className="completed-item"
                    onClick={this.selectItem.bind(this, _id)}>
                      {desc}

                    <button onClick={ this.props.handleDeleteComplete.bind(this, _id) }>
                        Delete
                    </button>
                    <button onClick={ this.props.handleUndoChecked.bind(this, _id) }>
                        Undo
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