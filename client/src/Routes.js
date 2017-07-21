import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import CurrentLoc from './components/CurrentLoc';
import Date from './components/Date';
import Clock from './components/Clock';
import WidgetWind from './components/WidgetWind';
import WidgetTemp from './components/WidgetTemp';
import * as actions from './actions';
import './css/sky.css';
import './css/index.css';

class App extends Component {
	componentDidMount() {
		this.props.dispatch(actions.fetchWeather());
	}
	render() {
		return (
			<div className="App">
				<div className={`bg sky-gradient-${this.props.hour}`}>
					<div className="container">
						<CurrentLoc
							city={this.props.city}
							stateName={this.props.stateName}
						/>
						<Date
							day={this.props.day}
							month={this.props.month}
							dayOfMonth={this.props.dayOfMonth}
						/>
						<Clock />
						<div className="conditions">
							<WidgetTemp
								temp={this.props.temp}
								low={this.props.low}
								high={this.props.high}
							/>
							<WidgetWind
								windSpeed={this.props.windSpeed}
								windDir={this.props.windDir}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// F : focused
// I: independent
// R: reusable
// S: small
// T: testable
//

const mapStateToProps = (state, props) => ({
	changeLoc: state.changeLoc,
	day: state.day,
	month: state.month,
	hour: state.hour,
	minutes: state.minutes,
	dayOfMonth: state.dayOfMonth,
	city: state.city,
	stateName: state.stateName,
	temp: state.temp,
	low: state.low,
	high: state.high,
	windSpeed: state.windSpeed,
	windDir: state.windDir
});

export default connect(mapStateToProps)(App);
