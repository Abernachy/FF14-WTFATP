import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import store from './store'

const history = createBrowserHistory()

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)
