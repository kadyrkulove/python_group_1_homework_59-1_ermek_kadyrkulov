import React, { Component } from 'react';
import './App.css';
import NewFilm from "./container/NewFilm";

class App extends Component {
  render() {
    return (
        <div className="NewFilm">
        <NewFilm/>
        </div>
    )
  }
}

export default App;
