import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container } from '@mui/material'
import Homescreen from './screens/Homescreen'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const theme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#0a0a0a',
		},
		secondary: {
			main: '#00c044',
		},
	},
})

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<Router>
				<Route path='/' component={Homescreen} exact />
			</Router>
			<Footer />
		</ThemeProvider>
	)
}

export default App
