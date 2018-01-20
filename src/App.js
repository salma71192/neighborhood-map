import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Nav />
        <MapContainer />
      </div>
    )
  }
}

export default App;
