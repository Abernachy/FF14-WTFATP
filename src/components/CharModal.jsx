import { React, useEffect } from 'react'
import { Box, Typography, Button, Card } from '@mui/material'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 450,
	height: 450,
	bgcolor: 'background.paper',
	border: '5px solid #000',
	boxShadow: 24,
	p: 4,
}

const CharModal = () => {
	const submitHandler = (e) => {
		console.log('nuting')
	}

	return (
		<Box sx={style}>
			<Typography id='modal-modal-title' variant='h6' component='h2'>
				Billy Maz here
			</Typography>
			<Typography id='modal-modal-description' sx={{ mt: 2 }}>
				Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
			</Typography>

			<Button onClick={submitHandler}>Click me baby</Button>
		</Box>
	)
}

export default CharModal
