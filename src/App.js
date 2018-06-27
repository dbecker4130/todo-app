import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import autoBind from 'react-autobind';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
            items: [],
            text: '',
            allTasks: []
        };
    }

    componentDidMount() {
        
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

                {/* <AllTasks allTasks={ this.state.allTasks } /> */}
                <ul>
                { this.state.allTasks.map(({
                    _id, desc, createdAt, 
                }) => (
                    <li key={ _id }>{ desc }</li>
                ))}
            
            </ul>
                
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

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

// class AllTasks extends React.Component {
//     render() {
//         return (
//             <ul>
//                 { this.state.allTasks.map(item => (
//                     <li key={ item._id }>{ item.desc }</li>
//                 ))}
            
//             </ul>
//         )
//     }
// }

export default withStyles(styles)(App);