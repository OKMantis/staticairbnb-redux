import flats from '../flats';
export const SET_FLATS = 'SET_FLATS';
export const SELECT_FLAT = 'SELECT_FLAT';
export function setFlats() {

 return {
   type: SET_FLATS,
   payload: flats // this is inside flats.js
 }

  // const promise = fetch('https://raw.githubusercontent.com/[..]flats.json')
  //   .then(response => response.json());

  // return {
  //   type: SET_FLATS,
  //   payload: promise
  // };
}

// Above the API call thru fetch and using Redux Promise middleware.

// 2. Function setFlats is triggered by componentWillMount function
  // inside the container flat_list.jsx (line 14).
  // setFlats does an API call and returns the action
  // SET_FLATS with the payload flats.
  // Next thing happens inside flat_reducer...


export function selectFlat(flat) {
  return {
    type: SELECT_FLAT,
    payload: flat
  }
}

// The action creator 'handleClick' in flat.jsx (line 6)
// returns an action with a type and payload.
// The action flows through all the reducers
// (go to ../reducers/selected_flat_reducer.js).
