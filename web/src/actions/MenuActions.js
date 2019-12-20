import * as types from "./ActionTypes";

export function openMenu(dispatch) {
  dispatch({ type: types.MENU_OPENED });
}

export function closeMenu(dispatch) {
  dispatch({ type: types.MENU_CLOSED });
}

