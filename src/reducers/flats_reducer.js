const flatsReducer = (state, action) => {
 if (state === undefined) {
   // Reducer initialisation
   return [];
 }
 switch (action.type) {
  case 'SET_FLATS':
    return action.payload;
  default:
    return state;
 }
};

export default flatsReducer;


// switch is like a if statement. Here, when action.type
// is equal to 'SET_FLATS' (case) then return the new
// action payload (new state) which are the flats otherwise
// return the same state.


// 3. The flatreducer receives the action from the action
  // setFlats (../actions/index.js) and looks at the
  // action type and says ok great it's a setFlats action!
  // and so all the flats in the payload will be the new
  // state in the Redux store and thus return the payload.
  // Next step inside flat_list container.
