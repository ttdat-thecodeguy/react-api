import { combineReducers } from 'redux'
import actorReducer from './actorReducer'
import itemEditReducer from './itemEditReducer'


const appReducers = combineReducers({
    actorReducer,
    itemEditReducer
})
export default appReducers;