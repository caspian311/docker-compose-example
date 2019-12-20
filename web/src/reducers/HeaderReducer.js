import initialState from "./InitialHeaderState";
import * as types from "../actions/ActionTypes";

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MENU_CLOSED:
      return {
          ...state,
          isOpen: false
        };
    case types.MENU_OPENED:
      return {
          ...state,
          isOpen: true
        };
    default:
      return state
  }
};

export default headerReducer;
