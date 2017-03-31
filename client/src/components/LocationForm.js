import React, { Component } from 'react';
import { connect } from 'react-redux';


class LocationForm extends Component {

  render(){
    return (

      // <form onSubmit={(e) => {
      //   e.preventDefault();
      //   let stateName = e.target.stateName.value;
      //   let city = e.target.city.value;
      //   fetchWeather(city, stateName);
      //   e.target.city.value = '';
      //   e.target.stateName.value = '';
      // }}>
      //   <input type="text" name="city" className="city" placeholder={ this.props.city } / >
      //   <input type="text" name="stateName" className="stateName" placeholder={ this.props.stateName}/ >
      //   <button type="submit" className="change-loc"> Go < /button>
      //   <p> <small> For the time being, please use locations within the US.</small></p >
      // </form>
      <form >
        <input type="text" name="city" className="city" placeholder={ this.props.city } / >
        <input type="text" name="stateName" className="stateName" placeholder={ this.props.stateName}/ >
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
