import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class CurrentLoc extends Component {
    constructor(props) {
         super(props);
         this.hideButton = this.hideButton.bind(this);
    }

    hideButton(e) {
      e.preventDefault();
      this.props.dispatch(actions.showInput(e));
    }

  render(){
    return (
      <form className="currentLocation" >
        <button className="change-loc"  onClick={this.hideButton}> { this.props.city }, { this.props.stateName }</button>
      </form>
    );
  }
};

const mapStateToProps = (state, props) => ({
    showInput: state.showInput,
    city: state.city,
    stateName: state.stateName,
});

export default connect(mapStateToProps)(CurrentLoc);
