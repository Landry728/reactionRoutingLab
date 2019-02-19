import React from "react";

export default function OneFilmFunc(props) {

  const {title, description, director, producer, release_date } = props.film;

  return(
    <>
      <div >
        <div>
          <h3>{title} ({release_date})</h3>
          <span> Director: {director}</span> ||
          <span> Producer: {producer}</span>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}