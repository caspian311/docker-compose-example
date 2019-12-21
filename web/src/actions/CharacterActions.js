import * as types from './ActionTypes';
import * as characterService from '../services/CharacterService';

export async function loadCharacters(dispatch) {
  dispatch({ type: types.CHARACTERS_LOADING});
  try {
    const characters = await characterService.loadCharacters();
    dispatch({ type: types.CHARACTERS_LOADED, payload: characters });
    dispatch({ type: types.CHARACTERS_STOPPED_LOADING });
  } catch (error) {
    dispatch({ type: types.CHARACTERS_STOPPED_LOADING });
    dispatch({ type: types.SHOW_ERROR, payload: error });
  }
}
