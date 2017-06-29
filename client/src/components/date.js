import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/index.css';

class Date extends Component {
	render() {
		return (
			<div className="date">
				{this.props.day},&nbsp; {this.props.month}&nbsp; {this.props.dayOfMonth}
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	day: state.day,
	month: state.month,
	dayOfMonth: state.dayOfMonth
});

export default connect(mapStateToProps)(Date);
