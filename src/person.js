import React from 'react';
const person = props => {
  return (
    <div>
      <h1>
        hello I am { props.name } and my age is {props.age } and my gender is { props.gender }
      </h1>
      <h2>  { props.children }</h2>
      <p>----------------------------------------------------------------------------</p>
   </div>
  );
};
export default person;
