import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointment = [' Academia', 'Sair com os cachorros', 'sair'];

class App extends React.Component {
  render() {
    return(
      <ul>{appointment.map(item => Task(item))}</ul>
    )
  }
}

export default App;
