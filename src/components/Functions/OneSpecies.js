import React from "react";

export default function OneSpeciesFunc (props) {

  const {name, classification, eye_colors, hair_colors  } = props.specie;

  return(
    <>
      <div >
        <div>
          <h3>{name} ({classification})</h3>
          <span> Eye colours: {eye_colors}</span> ||
          <span> Hair colours: {hair_colors}</span>
        </div>
      </div>
    </>
  )
}