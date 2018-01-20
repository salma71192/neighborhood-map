import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapComp from './MapComp';
import './App.css';

export class MapContainer extends React.Component {
  render() {

    return (
      <Map google={this.props.google} zoom={14}>

      </Map>
    )
  }
}

//export the container WITHIN the GoogleApiWrapper
export default GoogleApiWrapper({
  apiKey: "AIzaSyC9Ob33bdHROjuO63Zp1p93vJjYB0F_pRI"
})(MapContainer)
