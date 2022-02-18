import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React from 'react';
import Footer from './Footer';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <>
        < Header />
        < Content />
        < Footer />
      </>
  );
  }
}

export default App;
