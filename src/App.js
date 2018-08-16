import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';

import List from './List';
import AddTask from './AddTask';

import './Reset.scss';
import './App.scss';

class App extends Component {
    constructor() {
        super() 
        autoBind(this);
        this.state = {  
            allTasks: [],
            text: ''
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/task`)
        .then( (res) => {
            this.setState({
                allTasks: res.data,
            })
            console.log('CPM state', this.state)
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    _handleChange(e) {
        this.setState({
            text: e.target.value
        });
    } 
    _handleSubmit(e) {
        e.preventDefault()
        console.log('POST fired');

        axios.post(`http://localhost:3000/api/task/new`, {
            desc: this.state.text
        })
        .then( (res) => {
            console.log('POST RES', res.data);
            this.setState({
                allTasks: [...this.state.allTasks, this.state.text],
                text: ''
            })
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    _handleDelete(_id) {
        console.log('incoming ID', _id)
        axios.post(`http://localhost:3000/api/task/${_id}`, {
            _id: _id
        })
        .then( (res) => {
            console.log('DEL RES', res.data)
            let newState = this.state;
            const index = newState.allTasks.findIndex(a => a._id === _id)
            console.log('INDEX', index)

            if (index === -1) return;
            newState.allTasks.splice(index, 1);
            this.setState(newState);
            console.log('DEL STATE', this.state);
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    _handleDeleteAll() {    
        axios.delete(`http://localhost:3000/api/task/all`)
        .then( (res) => {
            console.log('DEL ALL RES', res)
            this.setState({
                allTasks: [],
                text: ''
            });
        })
        .catch( (err) => {
            console.log(err)
        });
    }

    render() {
        return(
            <div className="App">
                <AddTask 
                    handleChange={this._handleChange}
                    handleSubmit={this._handleSubmit} 
                    task={this.state.text}
                />
                <List 
                    tasks={this.state.allTasks} 
                    handleDelete={this._handleDelete}
                />
                <button onClick={this._handleDeleteAll}>Clear All</button> 
            </div>
        )
    } 
}

export default (App);