import React, { Component} from "react";
import OneLocation from './Functions/OneLocation';

 export default class Location extends Component {
  constructor(props){
    super(props)
    this.state = {
      locations: [],
    } 
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
  .then(res => res.json())
  .then(locations => this.setState({ locations }));
  }

  render(){
    const locations = this.state.locations;
    return(
      <>
        <main>
          <div>
           <OneLocation location={locations} />
          </div>
        </main>
      </>
    );
  }
}