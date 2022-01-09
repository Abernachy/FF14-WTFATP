import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Homescreen from './screens/Homescreen'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CharacterSearch from './screens/CharacterSearch'

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
			<Router>
				<NavBar />
				<Route path='/' component={Homescreen} exact />
				<Route path='/search' component={CharacterSearch} exact />
			</Router>
			<Footer />
		</ThemeProvider>
	)
}

export default App
