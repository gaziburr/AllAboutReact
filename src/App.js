import React, { Component } from 'react';
import './index.css';
import Person from './person.js';
class App extends Component {
// a We can ess special property 'state' from App class which extends from Components (exported by react library)
  state= {
    persons: [
      {
        name: 'Gazibur Rahman',
        age: 21,
        gender: 'male',
        place: 'lakhimpur',
      },
      {
        name: 'Junaid',
        age: 20,
        gender: 'male',
        place: 'sonitpur',
      },
      {
        name: 'azizulhoque',
        age: 31,
        gender: 'male',
        place: 'morigaon',
      },
      {
        name: 'johura khatun',
        age: 55,
        gender: 'female',
        place: 'nagaon',
      },
    ],
  };
  switchdataHandler = () => {
    this.setState({
      persons: [
        {
          name: 'Gazi Mamu',
          age: 16,
          gender: 'male',
          place: 'Muwamari',
        },
        {
          name: 'Rofique',
          age: 19,
          gender: 'male',
          place: 'moirabari',
        },
        {
          name: 'azizulhoque',
          age: 31,
          gender: 'male',
          place: 'morigaon',
        },
        {
          name: 'johura khatun',
          age: 55,
          gender: 'female',
          place: 'nagaon',
        },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Waalaikumas-salam-warahmatullah-e-wabarakatuhu</h1>
        <button className="btn" onClick={this.switchdataHandler}>
          Change dom
        </button>
        <Person
          name={this.state.persons[0].name}
          gender={this.state.persons[0].gender}
          age={this.state.persons[0].age}>
          I am from {this.state.persons[0].place}
        </Person>
        <Person
          name={this.state.persons[1].name}
          gender={this.state.persons[1].gender}
          age={this.state.persons[1].age}>
          I am from {this.state.persons[1].place}
        </Person>
        <Person
          name={this.state.persons[2].name}
          gender={this.state.persons[2].gender}
          age={this.state.persons[2].age}>
          I am from {this.state.persons[2].place}
        </Person>
        <Person
          name={this.state.persons[3].name}
          gender={this.state.persons[3].gender}
          age={this.state.persons[3].age}>
          I am from {this.state.persons[3].place}
        </Person>
      </div>
    );
  }
}

export default App;
