import axios from 'axios'

export const xivApiCall = async (lodeId = null, charName = null, server = null) => {
	// this utility will make the XIV API calls using axios
	// https://xivapi.com/character/${lodeId}?data=FCM,FR,
	const url = 'https://xivapi.com/character'
	try {
		if (lodeId) {
			const { data } = await axios.get(`${url}/${lodeId}?data=FCM,FR`)
			console.log(data)
		} else {
			//no LodeID so it'll search based on the charName and the server

			console.log('billy')
		}
	} catch (error) {
		console.log(error)
	}
}
