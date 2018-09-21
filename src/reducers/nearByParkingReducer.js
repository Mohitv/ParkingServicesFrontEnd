import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function nearByParkingReducer(state = initialState.parkingslots, action) {
  switch (action.type) {
    case types.LOAD_PARKINGSLOTS_SUCCESS:
      return action.parkingslots;
    case types.BOOK_PARKINGSLOTS_SUCCESS:
      return state;
    default:
      return state;
  }
}





