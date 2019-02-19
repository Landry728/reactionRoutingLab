import React, { Component } from 'react';
import OneFilmFunc from './Functions/OneFilm';

export default class OneFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(films => this.setState({ films }));
    }

  render() {
    const films = this.state.films;
    return(
      <>
        <main>
          <div>
           <OneFilmFunc film={films} />
          </div>
        </main>
      </>
    )
  }
}