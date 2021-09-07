import React, { useState  } from 'react';
import './index.css';
import Person from './person.js';
//In react version 16.8 react introduced this way(react hooks) to manage State and create functional component but setState()>Component>react was the traditional way to manage state and create class based components 
//personsState is totally replaced by setPersonState we have to call useState() in react hook or functional components in this example
const app =() => {
  const [personsState, setPersonState] = useState({
   //
    persons:[
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
   outherValue:'It is my other value just for example'
  });
  const switchdataHandler = () => {
    setPersonState({
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
  return (
    <div className="App">
      <h1>Waalaikumas-salam-warahmatullah-e-wabarakatuhu</h1>
      <button className="btn" onClick={switchdataHandler}>
        Change dom
      </button>
      <Person
        name={personsState.persons[0].name}
        gender={personsState.persons[0].gender}
        age={personsState.persons[0].age}>
        I am from {personsState.persons[0].place } and {personsState.outherValue}
      </Person>
      <Person
        name={personsState.persons[1].name}
        gender={personsState.persons[1].gender}
        age={personsState.persons[1].age}>
        I am from {personsState.persons[1].place}
      </Person>
      <Person
        name={personsState.persons[2].name}
        gender={personsState.persons[2].gender}
        age={personsState.persons[2].age}>
        I am from {personsState.persons[2].place}
      </Person>
      <Person
        name={personsState.persons[3].name}
        gender={personsState.persons[3].gender}
        age={personsState.persons[3].age}>
        I am from {personsState.persons[3].place}
      </Person>
    </div>
  );
};

export default app;
