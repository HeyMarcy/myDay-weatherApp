import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from './components/clock';
import './css/sky.css';
import './css/index.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg sky-gradient-19">
          <div className="container">
          <form className="currentLocation" onSubmit={this.handleSubmit}>
            <button className="change-loc">{ this.props.city }, { this.props.stateName }</button>
          </form>
            <form className="locationForm" onSubmit={this.handleSubmit} >
              <input type="text" className="city" placeholder="City"/>
              <input type="text" className="stateName" placeholder="State"/>
              <button type="submit" className="change-loc">Go</button>
              <p><small>For the time being, please us locations within the US.</small></p>
            </form>

            <div className="timeDate">
              <div className="date">{ this.props.day },&nbsp; { this.props.month }&nbsp; { this.props.dayOfMonth }</div>
              <Clock />
            </div>
            <div className="conditions">
              <div className="widget">
                <h6>{ this.props.temp }</h6>
                <p>{ this.props.low }<span className="light"> &nbsp;|&nbsp; </span> { this.props.high }</p>
              </div>
              <div className="widget widget-wind">
                <h6>{ this.props.windSpeed } <small>mph</small></h6>
                <p className="wind-dir"> { this.props.windDir } </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


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
export default App;
