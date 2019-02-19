import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Films from './Films.jsx'
import People from './People'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to='/'>Go Home</Link>
                    <Link to='/films'>View Films</Link>
                    <Link to='/people'>View People</Link>
                    <Switch>

                        <Route path='/films' component ={Films}/>
                        <Route path='/people' component={People}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App