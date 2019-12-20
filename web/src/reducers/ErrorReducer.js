import initialState from "./InitialErrorState";
import * as types from "../actions/ActionTypes";

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_ERROR:
      return {
          ...state,
          errorMessage: action.payload.message
        };
    case types.DISMISS_ERROR:
      return {
          ...state,
          errorMessage: undefined
        };
    default:
      return state
  }
};

export default errorReducer;
