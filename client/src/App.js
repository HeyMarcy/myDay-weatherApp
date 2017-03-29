import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrentLoc from './components/CurrentLoc';
import LocationForm from './components/LocationForm';
import Date from './components/Date';
import Clock from './components/clock';
import WidgetWind from './components/WidgetWind';
import WidgetTemp from './components/WidgetTemp';
import './css/sky.css';
import './css/index.css';


function App (props) {
    return (
      <div className="App">
        <div className="bg sky-gradient-19">
          <div className="container">
            <CurrentLoc city={ props.city } stateName={ props.stateName }  />
            <LocationForm />
            <Date day={props.day}/>
            <Clock />
            <div className="conditions">
              <WidgetTemp temp={props.temp} low={ props.low } high={ props.high }/>
              <WidgetWind windSpeed={props.windSpeed} windDir={ props.windDir } />
            </div>
          </div>
        </div>
      </div>
    );
  }



App.defaultProps = {
  city: "Chicago",
  stateName: "IL",
  day: "Thursday",
  month: "August",
  dayOfMonth: "10",
  temp: "45",
  high: "48",
  low: "32",
  windSpeed: "6.2",
  windDir: "NNE",
}
export default App;
