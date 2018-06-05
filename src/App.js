import React, { Component } from 'react';
import autoBind from 'react-autobind';
import './Reset.scss';
import './App.scss';

class App extends Component {
    constructor() {
        super() 
        autoBind(this);
        this.state = {  
            items: [],
            text: ''
        };
    }

    render() {
        return(
            <div className="app">
                <h1>SHIT LIST</h1>
                <List items={ this.state.items } />
                <form onSubmit={ this.handleSubmit }>
                    <input
                        id="new-text"
                        placeholder="what is it?"
                        onChange={ this.handleChange }
                        value={ this.state.text }
                    />
                    <button>
                        Add #{ this.state.items.length + 1 }
                    </button>
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

class List extends React.Component {
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

export default App;