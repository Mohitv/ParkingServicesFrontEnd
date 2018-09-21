import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function showSubSlotsReducer(state= initialState.SubSlots,action){
  switch(action.type){
     case types.LOAD_SUB_SLOTS:
        state = action.parkingslot
        return state;
     default:
      return state;
  }
}
