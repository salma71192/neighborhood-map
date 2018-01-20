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
    let newQuery = e.target.value;
    this.setState({
      query: newQuery
    })
    console.log(this.state.query);
  }

  render() {
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
          {this.state.placesNames.map((placeName, index) =>
             <li key={index} className="listItem"><a href="#">{placeName}</a></li>)
          }
         </ul>
      </nav>
    )
  }
}

export default Nav
