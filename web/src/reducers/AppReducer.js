import initialState from "./InitialAppState";
import * as types from '../actions/ActionTypes';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_LOADING:
      return {
          ...state,
          loading: true,
        };
    case types.MESSAGE_LOADED:
      return {
          ...state,
          message: action.payload
        };
    case types.APP_STOPPED_LOADING:
      return {
          ...state,
          loading: false,
        };
    default:
      return state
  }
};

export default appReducer;
