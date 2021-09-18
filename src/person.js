import React from 'react';
import './Person.css';
const person = props => {
  return (
    <div className="Person">
      <button className="btn" style={props.style} onClick={props.remove}>
       Remove me
      </button>
      <p>
        hello I am {props.name} and my age is {props.age} and my gender is {props.gender}
      </p>
      <p onClick={props.click}> {props.children}</p>
      <input
        type="text"
value={props.name}
        onChange={props.change}
      />
    </div>
  );
};
export default person;
