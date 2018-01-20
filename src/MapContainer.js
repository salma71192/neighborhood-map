import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import MapComp from './MapComp';
import './App.css';

export class MapContainer extends React.Component {
  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
      <div style={style}>
        <MapComp google={this.props.google} />
      </div>
    )
  }
}

//export the container WITHIN the GoogleApiWrapper
export default GoogleApiWrapper({
  apiKey: "AIzaSyC9Ob33bdHROjuO63Zp1p93vJjYB0F_pRI"
})(MapContainer)
