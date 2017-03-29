import React from 'react';

const WidgetTemp = props => {
    return (
      <div className="widget">
        <h6>{ props.temp }</h6>
        <p>{ props.low }<span className="light"> &nbsp;|&nbsp; </span> { props.high }</p>
      </div>
    );
}


export default WidgetTemp;
