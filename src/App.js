import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <Person name="Max"  age="28"/>
        <Person name="Manu" age="29">My hobbies: racing</Person>
        <Person name="Stephanie" age="27"/>
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,  'Hi, I\'m a react app!!!'));
  }
}

export default App;
