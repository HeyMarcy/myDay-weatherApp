import {
	CURRENT_TIME,
	FETCH_WEATHER_SUCCESS,
	SHOW_INPUT
} from '../actions/index';

const initialState = {
	showInput: false,
	hour: '14',
	minutes: '30',
	day: '',
	month: '',
	dayOfMonth: '',
	temp: '',
	low: '',
	high: '',
	windDir: '',
	wind_degrees: '',
	windSpeed: '',
	city: '',
	stateName: ''
};

export const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_INPUT:
			return { ...state, showInput: !state.showInput };
		case CURRENT_TIME:
			return {
				...state,
				date: action.date,
				hour: action.hour,
				minutes: action.minutes
			};

		case FETCH_WEATHER_SUCCESS:
			console.log('action.payload', action.payload);
			return {
				...state,
				showInput: false,
				city: action.payload.current_observation.display_location.city,
				stateName: action.payload.current_observation.display_location.state,
				month:
					action.payload.forecast.simpleforecast.forecastday[0].date.monthname,
				day: action.payload.forecast.simpleforecast.forecastday[0].date.weekday,
				dayOfMonth:
					action.payload.forecast.simpleforecast.forecastday[0].date.day,
				temp: action.payload.current_observation.temp_f,
				low:
					action.payload.forecast.simpleforecast.forecastday[0].low.fahrenheit,
				high:
					action.payload.forecast.simpleforecast.forecastday[0].high.fahrenheit,
				windSpeed: action.payload.current_observation.wind_mph,
				windDir: action.payload.current_observation.wind_dir,
				wind_gust_mph: action.payload.current_observation.wind_gust_mph,
				wind_degrees: action.payload.current_observation.wind_degrees
			};

		default:
			return state;
	}
};
