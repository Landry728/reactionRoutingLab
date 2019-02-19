import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from './components/Nav'
import Home from "./components/Home";
import Films from "./components/Films";
import OneFilm from "./components/Film"
import People from "./components/People";
import Person from "./components/Person";
import Locations from "./components/Locations";
import Location from "./components/Location";
import Species from "./components/AllSpec";
import OneSpecies from "./components/OneSpec";


export default class App extends Component {

  render(){
    return(
        <Router>
          <>
            <Nav />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/films" component={Films}/>
                <Route path="/films/:id" component={OneFilm}/>
                <Route exact path="/people" component={People}/>
                <Route path="/people/:id" component={Person}/>
                <Route exact path="/locations" component={Locations}/>
                <Route path="/locations/:id" component={Location}/>
                <Route exact path="/species" component={Species}/>
                <Route path="/species/:id" component={OneSpecies}/>
              </Switch>
          </>
        </Router>
    );
  }
}


