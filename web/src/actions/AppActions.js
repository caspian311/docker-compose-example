import * as types from './ActionTypes';
import * as messageService from '../services/MessageService';

export async function loadMessage(dispatch) {
  dispatch({ type: types.APP_LOADING});
  try {
    const message = await messageService.loadMessage();
    dispatch({ type: types.APP_LOADED, payload: message });
  } catch (error) {
    dispatch({ type: types.ERROR_ON_LOADING, payload: error });
  }
}
