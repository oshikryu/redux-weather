import axios from 'axios';
const api_key = '3cf25e880854d0adb3608b530dc0eb78';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

// keep consistency between action type and creator
// must be the same action name in the reducer
// making it a const prevents mutations
// import this var into the reducer
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
// must return a type and payload
export function fetchWeather(city)  {
  const url = `${root_url}&q=${city},us`;
  const request = axios.get(url);

  // redux-promise stops action when it sees a promise and only
  // continues when the resolved request returns
  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
