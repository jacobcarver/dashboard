import React, { Component } from 'react';

// SCSS
import './scss/main.scss';

// Components
import Events from './components/Events';
import Bookmarks from './components/Bookmarks';
import Header from './components/Header';
import Weather from './components/Weather';
// import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="dashboard">
          <Events />
          <Weather />
          <Bookmarks />
        </div>
      </div>
    );
  }
}

export default App;
