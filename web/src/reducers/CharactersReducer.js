import initialState from "./InitialCharactersState";
import * as types from '../actions/ActionTypes';

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHARACTERS_LOADING:
      return {
          ...state,
          loading: true,
        };
    case types.CHARACTERS_LOADED:
      return {
          ...state,
          characters: action.payload
        };
    case types.CHARACTERS_STOPPED_LOADING:
      return {
          ...state,
          loading: false,
        };
    default:
      return state
  }
};

export default charactersReducer;
