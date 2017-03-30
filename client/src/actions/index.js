
import { connect } from 'react-redux';


export const CHANGE_LOC = 'INPUT_LOC';
export const changeLoc = () => ({
  type: CHANGE_LOC
});

export const CURRENT_TIME = 'CURRENT_TIME';
export const currentTime = (hour, minutes, date) => ({
    type: CURRENT_TIME,
    date,
    hour,
    minutes,
});

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const fetchDataSuccess = (payload) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload

});

export const FETCH_WEATHER_ERROR= 'FETCH_WEATHER_ERROR';
export const fetchDataError = ( error) => ({
    type: FETCH_WEATHER_ERROR,
    error
});

export const FETCH_WEATHER= 'FETCH_WEATHER';
export const fetchWeather = (city="miami", stateName="FL") => dispatch => {
    const url = `https://api.wunderground.com/api/fbb8fb3eb8e05269/conditions/forecast/q/${stateName}/${city}/.json`;
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response.json();
        console.log(response.json);
    })
    .then(data => dispatch(fetchDataSuccess(data)))
};


// export const fetchSky = () => dispatch => {
//     const url = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today`;
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             const error = new Error(response.statusText)
//             error.response = response
//             throw error;
//         }
//         return response.json();
//         console.log(response.json);
//     })
//     .then(data => dispatch(fetchSkySuccess(data)))
// };
