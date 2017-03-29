import React from 'react';

const WidgetWind = props => {
    return (
      <div className="widget">
        <h6>{ props.windSpeed } <small>mph</small></h6>
        <p className="wind-dir"> { props.windDir } </p>
      </div>
    );
}


export default WidgetWind;
