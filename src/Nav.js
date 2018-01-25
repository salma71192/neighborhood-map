import React from 'react';
import './App.css';


class Nav extends React.Component {
    state = {
      query: ""
    }
    updateQuery = (e) => {
      var query = e.target.value;
      this.setState({
        query: query
      })
    }

    render() {
      var filterPlaces = [];
      var tempPlaces = this.props.places;
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
               <li key={index} className="listItem"><a href="#" id={placeName} onClick={this.props.onChange}>{placeName}</a></li>)
            }
           </ul>
        </nav>
      )
    }

}

export default Nav
