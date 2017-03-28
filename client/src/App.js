import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from './components/clock';
import './css/sky.css';
import './css/index.css';

function CurrentLoc(props){
return(
  <form className="currentLocation" >
    <button className="change-loc">{ props.city }, { props.stateName }</button>
  </form>
  )
 CurrentLoc.propTypes = {
    city: React.PropTypes.string.isRequired,
    stateName: React.PropTypes.string.isRequired,
  }
}

function LocationForm (props){
  return (
    <form className="locationForm" >
      <input type="text" className="city" placeholder="City"/>
      <input type="text" className="stateName" placeholder="State"/>
      <button type="submit" className="change-loc">Go</button>
      <p><small>For the time being, please us locations within the US.</small></p>
    </form>
  )
}

function Date(props){
  return (
    <div className="date">{ props.day },&nbsp; { props.month }&nbsp; {props.dayOfMonth }</div>
  )
  Date.propTypes = {
    day: React.PropTypes.string.isRequired,
    month: React.PropTypes.string.isRequired,
    dayOfMonth: React.PropTypes.number.isRequired,
  }
}

function WidgetTemp(props){
  return (
    <div className="widget">
      <h6>{ props.temp }</h6>
      <p>{ props.low }<span className="light"> &nbsp;|&nbsp; </span> { props.high }</p>
    </div>
  )
}

function WidgetWind(props){
  return (
    <div className="widget">
      <h6>{ props.windSpeed } <small>mph</small></h6>
      <p className="wind-dir"> { props.windDir } </p>
    </div>
  )
}

function App (props) {
    return (
      <div className="App">
        <div className="bg sky-gradient-19">
          <div className="container">
            <CurrentLoc city={ props.city } stateName={ props.stateName }  />
            <LocationForm />

              <Date day={ props.day } month={ props.month } dayOfMonth={ props.dayOfMonth }/>
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
  day: "Wednesday",
  month: "August",
  dayOfMonth: "10",
  temp: "45",
  high: "48",
  low: "32",
  windSpeed: "6.2",
  windDir: "NNE",
}
export default App;
