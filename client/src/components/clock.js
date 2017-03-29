import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../css/index.css';

class Clock extends React.Component {
  render() {
    const formatHours= (hrs) => {
      let h = hrs;
      h >= 12 ? h = hrs-12 : h;
      h === 0 ? h = 12 : h;
      return h;
    };

    const formatMins = (mins) => {
      return mins < 10 ? mins = "0"+mins : mins
    };
    let date = new Date();
    let minPretty = formatMins(date.getMinutes());
    let hoursPretty = formatHours(date.getHours());

    return (
      <div>
          <span>
              <h1>{hoursPretty}:{minPretty}</h1>
          </span>
      </div>
    );
  }
}

export default Clock;
