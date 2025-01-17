import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state={
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:''});
        
    }
    //onChange =(e) => this.setState({ title: e.target.value});
    onChange =(e) => this.setState({ [e.target.name]: e.target.value});


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo ...'
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                ></input>
                <input 
                    type='submit' 
                    value='Submit'
                    className='btn'
                    style={{flex: '1'}}
                ></input>    
            </form>
        )
    }
}

AddTodo.propTypes = {
    AddTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }
export default AddTodo
