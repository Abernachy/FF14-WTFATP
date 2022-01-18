import {
	Grid,
	Divider,
	Paper,
	Box,
	Typography,
	Autocomplete,
	TextField,
	FormControl,
	InputLabel,
	Input,
	Button,
	Select,
	MenuItem,
	Modal,
} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { serverList } from '../data/servers'
import { React, useState } from 'react'
import CharModal from '../components/CharModal'

const CharacterSearch = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const handleOpen = () => setModalOpen(true)
	const handleClose = () => setModalOpen(false)
	const [billy, setBilly] = useState([1, 2, 3, 4, 5])

	const [characterValues, setCharacterValues] = useState({})

	const submitHandler = (e) => {
		e.preventDefault()
		console.log(characterValues)
		// handleOpen()
	}

	const handleChange = (event) => {
		setCharacterValues((oldValues) => ({
			...oldValues,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<Grid container flex-direction='row'>
			<Grid item xs={5} md={6}>
				<Box
					sx={{
						borderStyle: 'solid',
						align: 'center',
						flex: 'wrap',
					}}>
					<Typography variant='h2'>Instructions</Typography>
					<Divider />
					<Typography variant='body1' paragraph={true}>
						Type in your character's First Name, Last Name, and then select his/her server from the server drop down
						menu. After that, click submit
					</Typography>
				</Box>
			</Grid>
			<Box
				sx={{
					align: 'center',
					borderStyle: 'solid',
					flex: 'wrap',
				}}>
				<Grid item xs={5} md='auto'>
					<FormControl>
						<form onSubmit={submitHandler}>
							<TextField
								name='CharFirstName'
								label='Character First Name'
								required={true}
								value={characterValues['CharFirstName'] || ''}
								onChange={handleChange}
							/>

							<TextField
								name='CharLastName'
								label='Character Last Name'
								required={true}
								value={characterValues['CharLastName'] || ''}
								onChange={handleChange}
							/>
							<Select
								name='CharServer'
								labelId='CharServer'
								id='serverSelect'
								value={characterValues['CharServer'] || ''}
								label='Server'
								onChange={handleChange}>
								{serverList.map((server) => (
									<MenuItem key={server} value={server}>
										{server}
									</MenuItem>
								))}
							</Select>

							{/* <Autocomplete
								id='combo-box'
								name='CharServer'
								options={serverList}
								autoComplete
								inputValue={characterValues['CharServer'] || ''}
								value={characterValues['CharServer'] || ''}
								onChange={handleChange}
								onInputChange={handleChange}
								sx={{ width: 300, marginTop: 1, alignItems: 'center' }}
								renderInput={(params) => <TextField {...params} label='Select your server' name='CharServer' />}
							/> */}
							<Button type='Submit' variant='outlined'>
								Submit
							</Button>
						</form>
					</FormControl>
				</Grid>
				<div>
					<Modal
						disablePortal
						open={modalOpen}
						onClose={handleClose}
						aria-labelledby='Character-Search-Modal'
						aria-describedby='Character search'>
						<CharModal />
					</Modal>
				</div>
			</Box>
		</Grid>
	)
}

export default CharacterSearch
