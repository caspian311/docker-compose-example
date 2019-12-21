import { combineReducers } from 'redux'
import app from './AppReducer'
import menu from './MenuReducer'
import error from './ErrorReducer'

export default combineReducers({
  app,
  menu,
  error
})
