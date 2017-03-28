import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from './components/clock';
import './css/sky.css';
import './css/index.css';

const INITIAL_STATE = {
  hour: "23",
  minutes:"32",
  day:"21",
  month: "March",
  dayOfMonth: "Monday",
  weather: "Overcast",
  temp_f: "42",
  low: "38",
  high: "50",
  sunriseHour: 6,
  sunriseMinutes: 52,
  timeToSunset: "",
  sunset: 7,
  wind_dir: "NE",
  wind_degrees: 35,
  wind_mph: 3.7,
  wind_gust_mph: 9.3,
  wind_degrees:"6.2",
  city: "Chicago",
  stateName: "IL",
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg sky-gradient-19">
          <div className="container">
          <form className="currentLocation" onSubmit={this.handleSubmit}>
            <button className="change-loc">Chicago, IL </button>
          </form>
            <form className="locationForm" onSubmit={this.handleSubmit} >
              <input type="text" className="city" placeholder="City"/>
              <input type="text" className="stateName" placeholder="State"/>
              <button type="submit" className="change-loc">Go</button>
              <p><small>For the time being, please us locations within the US.</small></p>
            </form>

            <div className="timeDate">
              <div className="date">Wedneday, August 9</div>
              <Clock />
            </div>
            <div className="conditions">
              <div className="widget">
                <h6 className="current-temp">45</h6>
                <p>32 <span className="light"> &nbsp;|&nbsp; </span> 48</p>
              </div>
              <div className="widget widget-wind">
                <div><span className="temp">6.2</span> <small>mph</small></div>
                <div className="wind-dir"> NNE </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
