import React from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Places from './places.json';
import './App.css';

export class MapContainer extends React.Component {
  state = {
        places: [],
        placesNames: ["Delavija Sama Restaurants", "Genena Mall", "Hosny Restaurant", "Wonder Land", "McDonald", "City Stars"],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
  }

  componentDidMount() {
    this.setState({
      places: Places
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google}
          initialCenter={{lat: 30.0303311, lng: 31.284036}}
          onClick={this.onMapClicked}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={13}>
        {
          this.state.places.map((place, index) => {
            return(
              <Marker onClick={this.onMarkerClick}
                      name={this.state.placesNames[index]}
                      title={'Click to get information about ' + this.state.placesNames[index]}
                      position={this.state.places[index]}
                      key={index}
                       />
            )
          })
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
  }
//export the container WITHIN the GoogleApiWrapper
export default GoogleApiWrapper({
  apiKey: "AIzaSyC9Ob33bdHROjuO63Zp1p93vJjYB0F_pRI"
})(MapContainer)
