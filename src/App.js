import React, {Component} from 'react';
import './index.css';
import Person from './person.js';
class App extends Component {
  state = {
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
    showPerson: false,
  };
  switchdataHandler = NewName => {
    this.setState({
      persons: [
        {
          name: NewName,
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
  inputHandler = e => {
    this.setState({
      persons: [
        {
          name: e.target.value,
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
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };
  render() {
    const style = {
      padding: '5px',
      borderRadius: '7px',
      color: 'white',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      marginLeft: '40% ',
      backgroundColor: 'green',
    };
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div className="Persons">
          <Person
            style={style}
            name={this.state.persons[0].name}
            gender={this.state.persons[0].gender}
            click={() => this.switchdataHandler('Gazibur Rahman')}
            change={this.inputHandler}
            age={this.state.persons[0].age}>
            I am from {this.state.persons[0].place}
          </Person>
          <Person
            style={style}
            name={this.state.persons[1].name}
            click={this.switchdataHandler.bind(this, 'Junaid')}
            gender={this.state.persons[1].gender}
            age={this.state.persons[1].age}>
            I am from {this.state.persons[1].place}
          </Person>
          <Person
            name={this.state.persons[2].name}
            click={() => this.switchdataHandler('Maaa!!')}
            style={style}
            gender={this.state.persons[2].gender}
            age={this.state.persons[2].age}>
            I am from {this.state.persons[2].place}
          </Person>
          <Person
            name={this.state.persons[3].name}
            style={style}
            gender={this.state.persons[3].gender}
            age={this.state.persons[3].age}>
            I am from {this.state.persons[3].place}
          </Person>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Waalaikumas-salam-warahmatullah-e-wabarakatuhu</h1>
        <button
          style={style}
          className="btn"
          onClick={this.togglePersonHandler}>
          ToggleGazi
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
