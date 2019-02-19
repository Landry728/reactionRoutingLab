import React from "react";

export default function PersonFunc(props) {

  const {name, gender, age, eye_color, hair_color } = props.people;

  return(
    <>
      <div >
        <div>
          <h3>{name} ({gender})</h3>
          <span> Age: {age}</span> ||
          <span> Eye color: {eye_color}</span>
          <span> Hair color:{hair_color}</span>
        </div>
      </div>
    </>
  )
}