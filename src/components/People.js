import React, { Component } from "react";
import PeopleFunc from './Functions/AllPeople';

 export default class People extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: [],
    } 
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/people/`)
  .then(res => res.json())
  .then(people => this.setState({ people }));
  }

  render(){
    const people = this.state.people;
    return( 
      <>
        <h1>People</h1>
        <ul>
        {people.map(people=> {
            return <li key={people.id}>
            <PeopleFunc people={people}/>
            </li>
          })}
        </ul>
      </>
    );
  }
}



