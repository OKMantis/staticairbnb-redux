import flats from '../flats';
export function setFlats() {
 // TODO: Api call! For now, simulate a DB

 return {
   type: 'SET_FLATS',
   payload: flats // this is inside flats.js
 }
}

// 2. Function setFlats is triggered by componentWillMount function
  // inside the container flat_list.jsx (line 14).
  // setFlats does an API call and returns the action
  // SET_FLATS with the payload flats.
  // Next thing happens inside flat_reducer...
