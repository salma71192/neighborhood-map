import React from 'react';
import {InfoWindow} from 'google-maps-react';
import Places from './places.json';
import './App.css';

class Nav extends React.Component {
  state = {
    query: "",
    placesNames: ["Delavija Sama Restaurants", "Genena Mall", "Hosny Restaurant", "Wonder Land", "McDonald", "City Stars"]
  }

  updateQuery = (e) => {
    this.handleSearch(e.target.value);
  }

  handleSearch = (newQuery) => {
    this.setState({
      query: newQuery
    })
  }

  componentDidUpdate() {
    console.log(this.state.query);

  }

  render() {
    var filterPlaces = [];
    var tempPlaces = this.state.placesNames;
    tempPlaces.forEach((placeName) => {
      if(placeName.toLowerCase().indexOf(this.state.query) !== -1) {
          filterPlaces.push(placeName);
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
