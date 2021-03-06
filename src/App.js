import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // Don't mutate state!!!
    // this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  };
  render() {
    /* Note: 
      onClick={() => this.switchNameHandler('Maximmilan!!')}> can be ineffiecent multiple rerenders...
      this.switchNameHandler.bind(this, 'Max!') is better
    */
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximmilan!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')} >My hobbies: racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null,  'Hi, I\'m a react app!!!'));
}

export default App;
