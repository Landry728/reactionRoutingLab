import React, { Component } from 'react';
import PersonFunc from './Functions/OnePerson';

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(people => this.setState({ people }));
    }

  render() {
    const people = this.state.people;
    return(
      <>
        <main>
          <div>
           <PersonFunc people={people} />
          </div>
        </main>
      </>
    )
  }
}