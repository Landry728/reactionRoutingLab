import React from 'react';
import { Link } from 'react-router-dom';

export default function AllFilmsFunc(props) {

  const {title, id} = props.film;

  return(
    <>
      <div>
      <Link to={`/films/${id}`}>{title}</Link>
      </div>
    </>
  )
}

