import React from 'react';
import { Link } from 'react-router-dom';

export default function AllLocations(props) {

  const {name, id} = props.location;

  return(
    <>
      <div>
      <Link to={`/locations/${id}`}>{name}</Link>
      </div>
    </>
  )
}

