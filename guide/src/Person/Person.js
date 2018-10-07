import React, { Component } from 'react';

const person = (props) => {
    return (
      <div>
        <p onClick={props.click}>I am {props.name} and have {props.age} </p>
        <p>{props.children}</p>
        <input
          type='text'
          onChange={props.changed}
        >Something 2</input>
      </div>
    )
};

export default person;
