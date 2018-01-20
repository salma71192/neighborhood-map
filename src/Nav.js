import React from 'react';
import {InfoWindow} from 'google-maps-react';
import Places from './places.json';
import './App.css';

class Nav extends React.Component {
  state = {
    query: "",
    places: []
  }

  updateQuery = (e) => {
    this.handleSearch(e.target.value);
  }

  handleSearch = (newQuery) => {
    this.setState({
      query: newQuery
    })
  }

  componentDidMount() {
    this.setState({
      places: Places
    })
  }

  render() {
    var filterPlaces = [];
    var tempPlaces = this.state.places;
    tempPlaces.forEach((place) => {
      if(place.name.toLowerCase().indexOf(this.state.query) !== -1) {
          filterPlaces.push(place.name);
        }
      });
    return (
      <nav className="nav">
        <input
          type="search"
          name="search"
          className="search"
          id="search"
          placeholder="Search"
          onChange={this.updateQuery}
         />
         <ul className="listItems">
          {filterPlaces.map((placeName, index) =>
             <li key={index} className="listItem"><a href="#">{placeName}</a></li>)
          }
         </ul>
      </nav>
    )
  }
}

export default Nav
