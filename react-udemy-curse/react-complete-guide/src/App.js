import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
	  <div className="App">
		<h1>React App Hello world</h1>
	  </div>
	);
/*
    return React.createElement('div', {className:'App'},React.createElement('h1',null,'React App Hello world'));
*/
  }
}

export default App;
