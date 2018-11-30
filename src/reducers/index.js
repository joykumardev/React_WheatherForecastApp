import { combineReducers } from 'redux';
import weather from './weather_reducer';

const rootReducer = combineReducers({
    weather
});

export default rootReducer;