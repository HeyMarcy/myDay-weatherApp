import React, { Component } from 'react';
import CurrentLoc from './CurrentLoc';
// import LocationForm from './components/LocationForm';

export default class LocationContainer extends Component {
  state = {
    showform: false,
    showLocation: true,
    city: "Chicago",
    stateName: "IL",
  };

  render() {
    return (
<CurrentLoc city={ this.state.city } stateName={ this.state.stateName }  />
    )
  }
}
