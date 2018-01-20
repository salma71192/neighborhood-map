import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MapComp extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;

      var uluru = {lat: -25.363, lng: 131.044};
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
    }
    // ...
  }

  render() {
    return (
      <div id='map'></div>
    )
  }
}

export default MapComp;
