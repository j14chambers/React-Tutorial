import React, {Component} from 'react';
import{BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header';
//import uuid from 'uuid';
import Axios from 'axios';


class App extends Component {
  state = {
        todos: []
      }
      componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
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
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
        
      }
      AddTodo = (title) =>{
        Axios.post('https://jsonplaceholder.typicode.com/todos',{
          title,
          completed: false
        })
        .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
      }

  render(){
    //console.log(this.state.todos);
    //console.log(this.props.todos);
    return(
      <Router>
        <div className="App">
          <div className='container'>
            <Header></Header>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo AddTodo={this.AddTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}></Todos>
              </React.Fragment>
            )}></Route>

            <Route path="/about" component={About}></Route>
            
          </div>
          
      </div>
     </Router>
    )
  }
}

export default App;
