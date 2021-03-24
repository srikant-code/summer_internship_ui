import addReducer from './addReducer'
import editReducer from './editReducer'
import selectedReducer from './selectedReducer'
import searchReducer from './searchReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    add: addReducer,
    edit: editReducer,
    selected: selectedReducer,
    search: searchReducer,
})

export default allReducers;