import * as types from './ActionTypes';
import * as messageService from '../services/MessageService';

export async function loadMessage(dispatch) {
  dispatch({ type: types.APP_LOADING});
  try {
    const message = await messageService.loadMessage();
    dispatch({ type: types.MESSAGE_LOADED, payload: message });
    dispatch({ type: types.APP_STOPPED_LOADING });
  } catch (error) {
    dispatch({ type: types.APP_STOPPED_LOADING });
    dispatch({ type: types.SHOW_ERROR, payload: error });
  }
}
