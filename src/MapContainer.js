import React from 'react';
import {Map, Marker,InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import Nav from './Nav';
import Places from './places.json';
import sample from './wiki.js';
import './App.css';

export class MapContainer extends React.Component {
  state = {
        places: [],
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
    if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(this.props.google.maps.Animation.DROP);
        }

  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  filterMarkers = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    sample(e.target.id);
  }

  render() {
    return (
      <Map google={this.props.google}
          initialCenter={{lat: 30.0566282, lng: 31.3213528}}
          onClick={this.onMapClicked}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={13}>
          <Nav places={this.state.places} onChange={this.filterMarkers}/>
        {
          this.state.places.map((place, index) => {
            return(

              <Marker onClick={this.onMarkerClick}
                      name={this.state.places[index].name}
                      title={'Click to get information about ' + this.state.places[index].name}
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
