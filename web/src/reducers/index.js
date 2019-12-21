import { combineReducers } from 'redux'
import menu from './MenuReducer'
import characters from './CharactersReducer'
import error from './ErrorReducer'

export default combineReducers({
  menu,
  characters,
  error
})
