import React from 'react';
import { Link} from 'react-router-dom';
function Header(){
    return (
        <header style={headerStyle}>
            <h1>ToDoList</h1>
            <Link style={linkstyle} to='/'>Home</Link> | <Link style={linkstyle} to='/about'>About</Link>
        </header>
    )
}

const headerStyle ={
    background: '#083d77',
    color: '#fff',
    padding: '15px',
    textAlign: 'center'
}
const linkstyle ={
    color: '#fff',
    textDecoration: 'none'
}
export default Header