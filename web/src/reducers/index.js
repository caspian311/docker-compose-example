import { combineReducers } from 'redux'
import appReducer from './AppReducer'
import headerReducer from './HeaderReducer'
import errorReducer from './ErrorReducer'

export default combineReducers({
  appReducer,
  headerReducer,
  errorReducer
})
