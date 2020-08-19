  
import {createStore, combineReducers} from 'redux'

import pokemon from './reducer'

const combineReducer = combineReducers({pokemon})

const store = createStore(combineReducer)

export default store;
