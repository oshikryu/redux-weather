import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // never mutate your state in your reducer!!
      //return state.push([action.payload.data]);
      //
      // this returns a new copy of our state
      //return state.concat(action.payload.data);
      //
      // this is es6 syntax that concats
      return [ action.payload.data, ...state]
  }
  return state;
}
