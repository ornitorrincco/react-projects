import React, { Component, button } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'some', age: 18 },
      { name: 'Girderl', age: 54 }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('was clicked!');
    this.setState({
      persons:[
        { name: newName, age: 18 },
        { name: 'Girderl', age: 54 },
        { name:'pepe', age: 32 }]
    });
  }

  nameChangeHandler = (event) => {
    console.log('Name Change Handler was clicked!');
    this.setState({
      persons:[
        { name: event.target.value, age: 18 },
        { name: 'Girderl', age: 54 },
        { name:'pepe', age: 32 }]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <button
          onClick={() => this.switchNameHandler('Maximi')}
        >
          Switch Name
        </button>
        <Person
          click={this.switchNameHandler.bind(this,'Maximi')}
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
        />
        <Person
          click={() => this.switchNameHandler()}
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
          changed={this.nameChangeHandler}
        >Something</Person>
        <Person
          click={() => this.switchNameHandler()}
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}
        />
      </div>
    );
  }
}

export default App;
