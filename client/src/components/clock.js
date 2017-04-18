import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

import '../css/index.css';

class Clock extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let date = new Date();
        this.props.dispatch(actions.currentTime(date.getHours(), date.getMinutes()));
    }
    render() {
      //to format time to 12hr day. Need to remove from render and `.bind(this)`.

      const formatHours= (hrs) => {
        let h = hrs;
        h >= 12 ? h = hrs-12 : h;
        h === 0 ? h = 12 : h;
        return h;
      };

      const formatMins = (mins) => {
         return mins < 10 ? mins = "0"+mins : mins
      };

      let minPretty = formatMins(this.props.minutes);
      let hoursPretty = formatHours(this.props.hour);
        return (
            <div>
                <span>
                    <h1>{hoursPretty}:{minPretty}</h1>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({hour: state.hour, minutes: state.minutes});

export default connect(mapStateToProps)(Clock);
