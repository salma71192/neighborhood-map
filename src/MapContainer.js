import React from 'react';
import {Map, InfoWindow, Marker, Polygon, GoogleApiWrapper} from 'google-maps-react';
import './App.css';

export class MapContainer extends React.Component {

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }

    const places = [
      {lat: 30.0303311, lng: 31.284036}, // Delavija+Sama+Restaurants
      {lat: 30.0566282, lng: 31.3213528}, // Genena Mall
      {lat: 30.056331, lng: 31.3265885}, // Hosny Restaurant
      {lat: 30.0522079, lng: 31.3302792}, // Wonder Land
      {lat: 30.0522079, lng: 31.3302792}, // McDonald
      {lat: 30.0729836, lng: 31.3416726} // City Stars
    ]

    let markers = places.map((place, index) => {
      return(
        <Marker
        key={index}
        title={index}
        name={'SOMA'}
        position={places[index]} />
      )
    })

    return (
      <Map google={this.props.google}
      zoom={14} style={style} initialCenter={{lat: 30.0566282, lng: 31.3213528}}
      >
      {markers}
      </Map>
    )
  }
}

//export the container WITHIN the GoogleApiWrapper
export default GoogleApiWrapper({
  apiKey: "AIzaSyC9Ob33bdHROjuO63Zp1p93vJjYB0F_pRI"
})(MapContainer)
