import { createStore, combineReducers } from 'redux'

const reducer = combineReducers({})

const initialState = {
	character: {},
	friends: {},
}

const store = createStore(reducer, initialState)

export default store
