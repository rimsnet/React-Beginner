import React, { Component } from 'react';
import './App.css';
import NavLink from './components/NavLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App.js</h1>
        <NavLink />
      </div>
    );
  }
}

export default App;
