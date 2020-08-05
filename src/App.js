import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherstate: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    //DONT DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState({
      person: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maxmiliian!!!')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />

        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}
        >
          {' '}
          My Hobbies: Racing
        </Person>

        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    )
  }
}
export default App
