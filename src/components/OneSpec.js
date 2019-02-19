import React, { Component} from "react";
import OneSpeciesFunc from './Functions/OneSpecies';

 export default class OneSpecies extends Component {
  constructor(props){
    super(props)
    this.state = {
      species: [],
    } 
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/species/${this.props.match.params.id}`)
  .then(res => res.json())
  .then(species => this.setState({ species }));
  }

  render(){
    const species = this.state.species;
    return(
      <>
        <main>
          <div>
           <OneSpeciesFunc specie={species} />
          </div>
        </main>
      </>
    );
  }
}