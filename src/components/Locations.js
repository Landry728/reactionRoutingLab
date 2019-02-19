import React, { Component} from "react";
import AllLocations from './Functions/AllLocations';

 export default class Locations extends Component {
  constructor(props){
    super(props)
    this.state = {
      locations: [],
    } 
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/locations/`)
  .then(res => res.json())
  .then(locations => this.setState({ locations }));
  }

  render(){
    const locations = this.state.locations;
    return(
      <>
        <h1>Locations</h1>
        <ul>
        {locations.map(location=> {
            return <li key={location.id}>
            <AllLocations location={location}/>
            </li>
          })}
        </ul>
      </>
    );
  }
}