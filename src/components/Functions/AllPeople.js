import React from 'react';
import { Link } from 'react-router-dom';

export default function PeopleFunc(props) {

  const {id, name} = props.people;

  return(
    <>
      <div>
      <Link to={`/people/${id}`}>{name}</Link>
      </div>
    </>
  )
}

