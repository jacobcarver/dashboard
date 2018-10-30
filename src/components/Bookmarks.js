import React, { Component } from 'react';
import '../scss/Bookmarks.scss';

class Bookmarks extends Component {
    constructor() {
        super();
        this.state = { title: 'Bookmarks', name: prompt('What is your name?') };
    }

    render() {
        return (
            <div className="Bookmarks">
                <h1>{this.state.name}'s {this.state.title}</h1>
            </div>
        );
    }
}

export default Bookmarks;