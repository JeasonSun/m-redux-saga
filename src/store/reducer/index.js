import * as TYPES from "../action-types";

function reducer(state = { number: 0 }, action) {
  console.log('reducer-->',action.type);
  switch (action.type) {
    case TYPES.ADD:
      return { number: state.number + 1 };
    default:
      return state;
  }
}

export default reducer;
