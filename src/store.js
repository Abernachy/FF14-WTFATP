import { createStore, combineReducers } from 'redux'
import { characterRequestReducer, characterSearchReducer } from './reducers/characterReducers'

const reducer = combineReducers({
	character: characterRequestReducer,
	SearchCharacter: characterSearchReducer,
})

const initialState = {
	character: {},
	friends: {},
	freeCompanyMembers: {},
}

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
