import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';

import AllTasks from './Tasks';
import CreateTask from './CreateTask';

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
            // allTasks: []
        };
    }

    render() {
        return(
            <div className="App">

                <CreateTask />

                <AllTasks 
                    allTasks={ this.state.allTasks }
                />

            </div>
        )
    }  
}

// App.propTypes = {
//     allTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default withStyles(styles)(App);