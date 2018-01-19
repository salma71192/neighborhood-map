import React, { Component } from 'react';
import './App.css';

class MapComp extends Component {
   initMap() {
     if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
      }
  }

  render() {
    return (
      <div className="map" id="map"></div>
    )
  }
}

export default MapComp;
