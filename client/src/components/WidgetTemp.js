import React, { Component } from 'react';
import { connect } from 'react-redux';


class WidgetTemp extends Component {
  render() {
    return (
      <div className="widget">
        <h6>{ this.props.temp }</h6>
        <p>{ this.props.low }<span className="light"> &nbsp;|&nbsp; </span> { this.props.high }</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
    temp:state.temp,
    low:state.low,
    high: state.high,
});

export default connect(mapStateToProps)(WidgetTemp);
