// src/components/DisplayEmployee.jsx
import React from 'react';

function SimpsonPersonnage({person}) {
  return (
    person && (
      <div className='SimpsonPersonnage'>
        <img src={person.image} alt={person.character} />
        <ul>
          <li>Quote {person.quote}</li>
          <li>Name: {person.character} </li>
        </ul>
      </div>
    )
  );
}

export default SimpsonPersonnage;