import React, { Component, PropTypes } from 'react';

export default class CurrentLoc extends Component {

  render(){
    return (
      <form className="currentLocation" >
        <button className="change-loc" >{ this.props.city }, { this.props.stateName }</button>
      </form>
    );

  }
};
