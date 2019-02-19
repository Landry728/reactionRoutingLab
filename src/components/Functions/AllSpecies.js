import React from 'react';
import { Link } from 'react-router-dom';

export default function SpeciesFunc(props) {

  const {name, id} = props.specie;

  return(
    <>
      <div>
      <Link to={`/species/${id}`}>{name}</Link>
      </div>
    </>
  )
}

