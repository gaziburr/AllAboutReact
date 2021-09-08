import React from 'react';
const person = props => {
  return (
    <div>
      <button className="btn" onClick={props.click}>
        combtn
      </button>
      <p>
        hello I am {props.name} and my age is {props.age} and my gender is
        {props.gender}
      </p>
      <p onClick={props.click}> {props.children}</p>
      <input
        type="text"
        placeholder="input name you want to update"
        onChange={props.change}
      />
    </div>
  );
};
export default person;
