import React, { Component } from 'react';

class Page1 extends Component {

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((response) => {
            return response.json();
        })
        .then((obj) => console.log(obj));
    }
    render(films) {
        return (
            <h1>This is Page 1</h1>
        );
    }
}

export default Page1;