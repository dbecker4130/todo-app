import React, { Component } from 'react';
import axios from 'axios';
import autoBind from 'react-autobind';
import Button from '@material-ui/core/Button';

class AllTasks extends React.Component {
    constructor() {
        super()
        autoBind(this);
        this.state = {
            allTasks: []
        };
    }

    componentWillMount() {
        
        axios.get(`http://localhost:3000/api/task`)
        .then( (response) => {
            console.log(response.data)
            this.setState({
                allTasks: response.data,
            })
            console.log(this.state)
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <ul>
                { this.state.allTasks.map(({
                    _id, desc, createdAt, 
                }) => (
                    <li key={ _id }>{ desc }{ createdAt } { _id }
                        <Button
                            onClick={ this.handleDelete }>
                            Delete
                        </Button>
                    </li>
                ))}
            
            </ul>
        )
    }

    handleDelete() {

        axios.delete(`http://localhost:3000/api/task/${_id}`, {
            _id: _id 
        }).then( (response) => {
            console.log('DELETE RES', response.data);
        })
        .catch( (error) => {
            console.log(error);
        })
    }
}

export default AllTasks;