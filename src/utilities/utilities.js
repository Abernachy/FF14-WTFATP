import axios from 'axios'

export const getCharByID = async (lodeId) => {
	// this utility will make the XIV API calls using axios
	// https://xivapi.com/character/${lodeId}?data=FCM,FR,
	try {
		const url = `https://xivapi.com/character/${lodeId}?data=FCM,FC,FR`
		const { data } = await axios.get(url)
		console.log(data)
		return [data]
	} catch (error) {
		return {
			error: 'No data returned',
		}
	}
	// This returns the entire API character object and you can just deconstruct the individual key/value pairs at your leasure
}

export const searchChar = async (charName, server) => {
	//Broke the call into a separate serach function
	try {
		const searchURL = `https://xivapi.com/character/search?name=${charName}&server=${server}`
		const { data } = await axios.get(searchURL)
		return [data]
	} catch (error) {
		return {
			error: 'No data returned',
		}
	}
}
