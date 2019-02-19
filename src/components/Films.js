import React, { Component} from "react";
import AllFilmsFunc from './Functions/AllFilms';

 export default class Films extends Component {
  constructor(props){
    super(props)
    this.state = {
      films: [],
    } 
  }

componentDidMount(){
  fetch(`https://ghibliapi.herokuapp.com/films/`)
  .then(res => res.json())
  .then(films => this.setState({ films }));
  }

  render(){
    const films = this.state.films;
    return(
      <>
        <h1>Films</h1>
        <ul>
        {films.map(film=> {
            return <li key={film.id}>
            <AllFilmsFunc film={film}/>
            </li>
          })}
        </ul>
      </>
    );
  }
}



