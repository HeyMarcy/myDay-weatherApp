import React, { Component } from 'react';

export default class Date extends Component {
  state = {
    day: "Wednesday",
    month: "August",
    dayOfMonth: 9
  };

  render() {
    return (
      <div className="date">{ this.props.day },&nbsp; { this.state.month }&nbsp; {this.state.dayOfMonth }</div>

    )
  }
}
