import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class CurrentLoc extends Component {
  // constructor(props) {
  //        super(props);
  //        this.onClick = this.onClick.bind(this);
  //    }
  //
  //    onClick(e) {
  //         e.preventDefault();
  //        console.log("helo");
  //        {this.state.showInput: true} ;
  //    }


  render(){
    return (
      <form className="currentLocation" >
        <button className="change-loc"  onClick={this.onClick}>{ this.props.city }, { this.props.stateName }</button>
      </form>
    );

  }
};

// currentLocation.propTypes = {
//   showInput: PropTypes.func.isRequired,
// };

const mapStateToProps = (state, props) => ({
    showInput: state.showInput,
    city: state.city,
    stateName: state.stateName,
});

export default connect(mapStateToProps)(CurrentLoc);
