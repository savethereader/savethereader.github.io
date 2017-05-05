import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PLACE HOLDER</h2>
        </div>
        <p>What's your mood today?</p>
        <img src="happy.png" className="App-logo" alt="logo" />
        <img src="neutral.png" className="App-logo" alt="logo" />
        <img src="sad.png" className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
