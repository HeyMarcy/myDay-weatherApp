import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';


export default class Date extends Component {
  render() {
    return (
      <div className="date">{ this.props.day },&nbsp; { this.props.month }&nbsp; {this.props.dayOfMonth }</div>
    )
  }
}
