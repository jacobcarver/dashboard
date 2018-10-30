import React, { Component } from 'react';

// Components
import Bookmarks from './components/Bookmarks';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Bookmarks />
        <h1>App Layout</h1>
      </div>
    );
  }
}

export default App;
