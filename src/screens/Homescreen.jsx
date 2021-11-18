import React, { useState } from 'react'
import { FormControl, Paper } from '@mui/material'

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
		<div>
			<Paper elevation={3}>
				<form onSubmit={handleSubmit}>
					<Grid container alignItems='center' justify='center' direction='column'></Grid>
				</form>
			</Paper>
		</div>
	)
}

export default Homescreen
