import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// how to acces to electron from react
const electron = window.require('electron');

const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + Electron</h1>
        </header>
        <p className="App-intro">
          This is some component of React Changes in Real Time?
        </p>
      </div>
    );
  }
}

export default App;
