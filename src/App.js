import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';

import List from './List';
import AddTask from './AddTask';
import Completed from './Completed';

import './Reset.scss';
import './App.scss';

class App extends Component {
    constructor() {
        super() 
        autoBind(this);
        this.state = {  
            allTasks: [],
            completed: [],
            text: '',
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/task`)
        .then( (res) => {
            console.log('res.data', res.data)
            res.data.forEach((task) => {
                if (task.checked === undefined || task.checked === false) {
                    this.setState({
                        allTasks: [...this.state.allTasks, task]
                    })
                }
                if (task.checked === true) {
                    this.setState({
                        completed: [...this.state.completed, task]
                    })
                }
            })
                console.log('refresh state', this.state)
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
 
    _handleChecked(_id, e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/task/update`, {
            _id: _id,
        })
        .then( (res) => {
            console.log('PUT RES', res.data);
            const index = this.state.allTasks.findIndex(a => a._id === _id)
            this.setState({
                allTasks: this.state.allTasks.filter((_, i) => i !== index),
                completed: [...this.state.completed, res.data],
                text: ''
            })
            console.log('new STATE', this.state)
            
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    _handleUndoChecked(_id) {
        axios.put(`http://localhost:3000/api/task/undo`, {
            _id: _id,
        })
        .then( (res) => {
            console.log('PUT RES', res.data);
            const index = this.state.completed.findIndex(a => a._id === _id)
            this.setState({
                completed: this.state.completed.filter((_, i) => i !== index),
                allTasks: [...this.state.allTasks, res.data],
                text: ''
            })
            console.log('updated STATE', this.state)
        })
        .catch( (err) => {
            console.log(err);
        })

    }
    _handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:3000/api/task/new`, {
            desc: this.state.text
        })
        .then( (res) => {
            console.log('POST RES', res.data);
            this.setState({
                allTasks: [...this.state.allTasks, res.data],
                text: ''
            })
            console.log(this.state)
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    _handleDelete(_id) {
        axios.post(`http://localhost:3000/api/task/${_id}`, {
            _id: _id
        })
        .then( (res) => {
            console.log('DEL RES', res.data)
            let newState = this.state;
            const index = newState.allTasks.findIndex(a => a._id === _id)
            if (index === -1) return;
            newState.allTasks.splice(index, 1);
            this.setState(newState);
            console.log('DEL STATE', this.state);
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    _handleDeleteComplete(_id) {
        axios.post(`http://localhost:3000/api/task/${_id}`, {
            _id: _id
        })
        .then( (res) => {
            console.log('DEL COMPLETE RES', res.data)
            let newState = this.state;
            const index = newState.completed.findIndex(a => a._id === _id)
            if (index === -1) return;
            this.state.completed.splice(index, 1);
            this.setState(newState);
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
                completed: [],
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
                    handleChecked={this._handleChecked}
                />
                <button 
                    onClick={this._handleDeleteAll}
                    className="clear-all-btn">
                    Clear All
                </button> 

                <Completed 
                    completed={this.state.completed}
                    handleDeleteComplete={this._handleDeleteComplete}
                    handleUndoChecked={this._handleUndoChecked}
                    />

            </div>
        )
    } 
}

export default (App);