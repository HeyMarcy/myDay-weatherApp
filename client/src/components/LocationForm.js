import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class LocationForm extends Component {
  constructor(props) {
         super(props);
         this.onSubmit = this.onSubmit.bind(this)
     }
  onSubmit(e) {
         e.preventDefault();
         let city = this.city.value;
         let stateName = this.stateName.value;
         this.props.dispatch(actions.fetchWeather(city, stateName))
         console.log(this.city);
   }


  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input  type="text" name="city" className="city" placeholder="City" ref={(city) => { this.city = city; }} / >
        <input  type="text" name="stateName" className="stateName" placeholder="ST" ref={(stateName) => { this.stateName = stateName; }} / >
        <button type="submit" className="change-loc"> Go < /button>
        <p> <small> For the time being, please use locations within the US.</small></p >
      </form>
    );

  }
};
const mapStateToProps = (state, props) => ({
    city: state.city,
    stateName: state.stateName,
});

export default connect(mapStateToProps)(LocationForm);
