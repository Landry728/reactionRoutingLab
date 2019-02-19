import React, { Component} from "react";
import SpeciesFunc from './Functions/AllSpecies';

 export default class Species extends Component {
  constructor(props){
    super(props)
    this.state = {
      species: [],
    } 
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/species/`)
  .then(res => res.json())
  .then(species => this.setState({ species }));
  }

  render(){
    const species = this.state.species;
    return(
      <>
        <h1>Species</h1>
        <ul>
        {species.map(specie=> {
            return <li key={specie.id}>
            <SpeciesFunc specie={specie}/>
            </li>
          })}
        </ul>
      </>
    );
  }
}