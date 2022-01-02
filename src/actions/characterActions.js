import { getCharByID, searchChar } from '../utilities/utilities'
import * as char from '../constants/characterConstants'

export const getCharacterByID = (id) => {
	dispatch({
		type: char.CHARACTER_API_REQUEST,
	})

	const data = getCharByID(id)

	if (Object.keys(data).includes('error')) {
		dispatch({
			type: char.CHARACTER_API_FAIL,
			payload: data,
		})
	} else {
		dispatch({
			type: char.CHARACTER_API_SUCCESS,
			payload: data,
		})
	}
}

export const searchCharacterByServerandName = (name, server) => {
	dispatch({
		type: char.CHARACTER_API_SEARCH_REQUEST,
	})

	const data = searchChar(name, server)

	if (Object.keys(data).includes('error')) {
		dispatch({
			type: char.CHARACTER_API_SEARCH_FAIL,
			payload: data,
		})
	} else {
		dispatch({
			type: char.CHARACTER_API_SEARCH_SUCCESS,
			payload: data,
		})
	}
}
