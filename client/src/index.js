import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
App.defaultProps = {
  city: "Chicago",
  stateName: "IL",
  day: "Wednesday",
  month: "August",
  dayOfMonth: "9",
  temp: "45",
  high: "48",
  low: "32",
  windSpeed: "6.2",
  windDir: "NNE",
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
