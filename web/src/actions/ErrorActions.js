import * as types from './ActionTypes';

export function dismissError(dispatch) {
  dispatch({ type: types.DISMISS_ERROR });
}
