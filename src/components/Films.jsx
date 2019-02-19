import React, { Component } from 'react'

class Films extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((response) => {
                return response.json();
            })
            .then((obj) => {
                this.setState({"movies": obj})
            }
            );

    }

    render() {

        const { movies } = this.state;

        return (
            <React.Fragment>

                <h2>Movie List</h2>
                <ul>
                    {  movies !== undefined ?
                        (
                            movies.map((movie) => {
                                return (
                                    <li>{movie.title}</li>
                                )
                            }) 
                        ) : ""
                    }
                </ul>

            </React.Fragment>
        );
    }
}

export default Films;