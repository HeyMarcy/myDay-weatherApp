import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Router, Route } from 'react-router';
import CurrentLoc from './components/CurrentLoc';
import LocationForm from './components/LocationForm';
import Date from './components/Date';
import Clock from './components/Clock';
import WidgetWind from './components/WidgetWind';
import WidgetTemp from './components/WidgetTemp';
import * as actions from './actions'
import './css/sky.css';
import './css/index.css';


class App  extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchWeather());
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className={`bg bg sky-gradient-${this.props.hour}`}>
          <div className="container">
          { this.props.showInput ? <LocationForm /> : <CurrentLoc /> }
            <Date />
            <Clock />
            <div className="conditions">
              <WidgetTemp />
              <WidgetWind  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state, props) => ({
    showInput: state.showInput,
    day: state.day,
    month: state.month,
    hour: state.hour,
    minutes: state.minutes,
    dayOfMonth: state.dayOfMonth,
    city: state.city,
    stateName: state.stateName,
    temp:state.temp,
    low:state.low,
    high: state.high,
    windSpeed: state.windSpeed,
    windDir: state.windDir,

});

export default connect(mapStateToProps)(App);
