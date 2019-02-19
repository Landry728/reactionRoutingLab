import React from "react";

export default function OneLocation(props) {

  const {name, climate, terrain, surface_water } = props.location;

  return(
    <>
      <div >
        <div>
          <h3>{name} ({climate})</h3>
          <span> terrain: {terrain}</span> ||
          <span> Surface water: {surface_water}</span>
        </div>
      </div>
    </>
  )
}