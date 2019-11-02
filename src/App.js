import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';


class App extends Component {
  state = {
        todos: [
          {
            id: uuid.v4(),
            title: 'Take out trash',
            completed: false
          },
          {
            id: uuid.v4(),
            title: 'Bus',
            completed: true
          },
          {
            id: uuid.v4(),
            title: 'Check tutorial',
            completed: false
          }
        ]
      }
//Toggle complete
      markComplete =(id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed
          }
          return todo;
        })
      })
      }

      delTodo =(id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
      }

      AddTodo = (title) => {
        const newTodo = {
          id: uuid.v4(),
          title,
          completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]})
      }

  render(){
    console.log(this.state.todos);
    console.log(this.props.todos);
    return(
      <div className="App">
        <div className='container'>
          <Header></Header>
          <AddTodo AddTodo={this.AddTodo}></AddTodo>
          <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}></Todos>
        </div>
        
     </div>
    )
  }
}

export default App;
