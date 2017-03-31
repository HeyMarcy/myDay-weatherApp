import React, { Component } from 'react';
import { connect } from 'react-redux';

class WidgetWind extends Component {
  render() {
    return (
      <div className="widget">
        <h6>{ this.props.windSpeed } <small>mph</small></h6>
        <p className="wind-dir"> { this.props.windDir } </p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    windSpeed: state.windSpeed,
    windDir: state.windDir,
});

export default connect(mapStateToProps)(WidgetWind);
