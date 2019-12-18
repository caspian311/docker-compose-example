import initialState from "./InitialAppState";
import * as types from '../actions/ActionTypes';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_LOADING:
      return {
          ...state,
          loading: true,
        };
    case types.APP_LOADED:
      return {
          ...state,
          loading: false,
          message: action.payload
        };
    case types.ERROR_ON_LOADING:
      return {
          ...state,
          loading: false,
          error: true,
          errorMessage: action.payload
        };
    default:
      return state
  }
};

export default appReducer;
