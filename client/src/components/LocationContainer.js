import React, { Component } from 'react';
import CurrentLoc from './CurrentLoc';
import LocationForm from './LocationForm';
// import LocationForm from './components/LocationForm';

export default class LocationContainer extends Component {

var displayLoc = true;

  render() {
    return (
      <CurrentLoc city={ this.props.city } stateName={ this.props.stateName }  />
    )
  }
}
