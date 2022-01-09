import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'

const defaultValues = {
	lodeId: '',
	FirstName: '',
	LastName: '',
	Server: '',
}

const Homescreen = () => {
	const [formValues, setFormValues] = useState(defaultValues)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submitted')
	}

	return (
		<Container>
			<Typography variant='h1' align='center'>
				Title Goes here
			</Typography>

			<form onSubmit={handleSubmit}>
				<div align='center'>
					<Button variant='contained' color='secondary'>
						Submit
					</Button>
				</div>
			</form>
		</Container>
	)
}

export default Homescreen
