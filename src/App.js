import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import InsetList from './MaterialList';
import './Reset.scss';
import './App.scss';
// import { Checkbox, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';


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
            items: [],
            text: '',
            checked: []
        };
    }
            
        render() {
            const { classes } = this.props;
            return(
                <div className="App">
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
                        Add #{ this.state.items.length + 1 }
                    </Button>
                </form>
                <ListItems items={ this.state.items } />
                {/* <InsetList classesList={ classesList } /> */}
                
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
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

class ListItems extends React.Component {
    render() {
        return (
            <ul>
                { this.props.items.map(item => (
                    <li key={ item.id }>{ item.text }</li>
                ))}
            </ul>
        )
    }
}

export default withStyles(styles)(App);