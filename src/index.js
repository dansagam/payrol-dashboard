// import React from 'react'
import 'simplebar/dist/simplebar.css'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker'
import store from './app/store'

ReactDOM.render(
   <HelmetProvider>
      <Provider store={store}>
         <Router>
            <App />
         </Router>
      </Provider>
   </HelmetProvider>,
   document.getElementById('root')
)

// If you want to enable client cache, register instead.
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
