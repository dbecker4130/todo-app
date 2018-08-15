import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';

import List from './List';
import AddTask from './AddTask';

import './Reset.scss';
import './App.scss';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class App extends Component {
    constructor() {
        super() 
        autoBind(this);
        this.state = {  
            allTasks: [],
            text: ''
        };
    }

    _handleChange(e) {
        this.setState({
            text: e.target.value
        });
    } 
    _handleSubmit(e) {
        e.preventDefault();
        console.log('Submit fired')

        this.setState({
            allTasks: [...this.state.allTasks, this.state.text],
            text: ''
        })
    }

    _handleDelete(id) {
        this.setState(prevState => ({
            allTasks: prevState.allTasks.filter(el => el != id)
        }));
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
                
            </div>
        )
    } 

}

export default withStyles()(App);