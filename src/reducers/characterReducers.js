import * as char from '../constants/characterConstants'

export const characterRequestReducer = (state = {}, action) => {
	switch (action.type) {
		case char.CHARACTER_API_REQUEST:
			return {
				loading: true,
			}
		case char.CHARACTER_API_SUCCESS:
			return {
				loading: false,
				success: true,
				character: action.payload,
			}
		case char.CHARACTER_API_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
export const characterSearchReducer = (state = [], action) => {
	switch (action.type) {
		case char.CHARACTER_API_SEARCH_REQUEST:
			return {
				loading: true,
			}
		case char.CHARACTER_API_SEARCH_SUCCESS:
			return {
				loading: false,
				success: true,
				characterSearch: action.payload,
			}
		case char.CHARACTER_API_SEARCH_FAIL:
			return {
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
