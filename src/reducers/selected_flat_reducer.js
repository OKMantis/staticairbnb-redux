import { SELECT_FLAT } from '../actions';

const selectedFlatReducer = (state, action) => {
 if (state === undefined) {
   // Reducer initialisation
   return null;
 }
  switch (action.type) {
  case SELECT_FLAT:
    return action.payload;
  default:
    return state;
 }
};

export default selectedFlatReducer;

// The action (see ../actions/index.js) creates a new
// Redux state which makes it up-to-date, rerendering only
// the containers who need to be rerendered (see ../containers).
