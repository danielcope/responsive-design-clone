import { Component } from 'react';
import Header from './components/Header'
import Nav from './components/Nav'


import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="app">
        <header>
          <Header />
          <Nav /> 
        </header>       
      </div>
    );
  }
}

export default App;
