import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', width: '300px'}}>
      <Board knightPosition={knightPosition} />
      </div>
    );
  }
}

export default App;
