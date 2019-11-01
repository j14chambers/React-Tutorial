import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

// function App() {
//   state = {
//     todos: [
//       {
//         id: 1,
//         title: 'Take out trash',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'Bus',
//         completed: false
//       },
//       {
//         id: 3,
//         title: 'Check tut',
//         completed: false
//       }
//     ]
//   }
//   console.log(this.state.todos);
//   return (
//     <div className="App">
//      <h1>Hello</h1>
//      <Todos></Todos>
//     </div>
//   );
// }

class App extends Component {
  state = {
        todos: [
          {
            id: 1,
            title: 'Take out trash',
            completed: false
          },
          {
            id: 2,
            title: 'Bus',
            completed: true
          },
          {
            id: 3,
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

  render(){
    console.log(this.state.todos);
    console.log(this.props.todos);
    return(
      <div className="App">
        <h1>Hello</h1>
        <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}></Todos>
     </div>
    )
  }
}

export default App;
