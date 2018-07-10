import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class CreateTask extends React.Component {
    constructor() {
        super()
        autoBind(this)
        this.state = {  
            text: '',
            allTasks: []
        };
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h1>SHIT LIST</h1>
                    <input
                        id="new-text"
                        placeholder="what is it?"
                        onChange={ this.handleChange }
                        value={ this.state.text }
                        />
                    <Button
                        type="submit"
                        variant="outlined" 
                        className={classes.button}
                        >
                        Add 
                    </Button>
                </form>
            </div>
        )
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        axios.post(`http://localhost:3000/api/task/new`, {
            desc: this.state.text
        })
        .then( (response) => {
            console.log('POST RES', response.data);
            const newItem = {
                text: this.state.text
            };
            this.setState(prevState => ({
                allTasks: prevState.allTasks.concat(newItem),
                text: ''
            }))
        })
        .catch( (error) => {
            console.log(error);
        })
    }

}

CreateTask.propTypes = {
    classes: PropTypes.object.isRequired,
    // allTasks: PropTypes.object.isRequired,
};

export default withStyles()(CreateTask);