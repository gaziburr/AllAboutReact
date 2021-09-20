import React, {Component} from 'react';
import './index.css';
import Person from './person.js';
class App extends Component {
  state = {
    persons: [
      {
        id: '8ff8ht8',
        name: 'gazibur rahman',
        age: 21,
        gender: 'male',
        place: 'lakhimpur',
      },
      {
        id: '8ffh8t8',
        name: 'Junaid',
        age: 20,
        gender: 'male',
        place: 'sonitpur',
      },
      {
        id: '8ff8tt8',
        name: 'azizulhoque',
        age: 31,
        gender: 'male',
        place: 'morigaon',
      },
    ],
    showPerson: false,
  };
  inputHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };
  deletePersonHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const persons = [...this.state.persons];//spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  };
  render() {
    const style = {
      padding: '10px',
     textAlign:'center',
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
          {this.state.persons.map(person => {
            return (
              <Person
                style={style}
                name={person.name}
                gender={person.gender}
                change={event => this.inputHandler(event, person.id)}
                remove={event => this.deletePersonHandler(event, person.id)}
                key={person.id}
                age={person.age}>
                I am from {person.place}
              </Person>
            );
          })}
        </div>
      );
     style.backgroundColor="red"
     style.color="yellow"
     style.padding="5px"
    }
    return (
      <div className="App">
        <h1>hello, I am React , Do you want me🤗</h1>
        <button
          style={style}
          className="btn"
          onClick={this.togglePersonHandler}>
          ToggleComponents
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
