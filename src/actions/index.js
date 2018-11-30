
// Calling Api Using Axios
import axios from 'axios';
import { FETCH_WEATHER } from '../constants/Actions_types';

//Importing App_id 
import {APP_ID, ID} from '../constants/apikey';

const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${ID}&units=metric&appid=${APP_ID}&cnt=5`

/*
export const weatherNews = (request) => {
    return {
      type: 'FETCH_WEATHER',
      payload:request
    }
  };
  
  export const fetchWeather = () => {
    return (dispatch) => {
      return axios.get(URL)
        .then(response => {
          dispatch(weatherNews(response.json()))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  */

  // Calling Api 
export function weatherNews(){
    const request = fetch(URL, { method: 'GET'})
                  .then(response => response.json());
    return{
        type: 'FETCH_WEATHER',
        payload:request
    }
}