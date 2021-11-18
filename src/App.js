import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Homescreen from './screens/Homescreen'

const App = () => {
	return (
		<Router>
			<>
				{
					//Side bar component will go here
				}
				<Container>
					<Route path='/' component={Homescreen} exact />
				</Container>
			</>
		</Router>
	)
}

export default App
