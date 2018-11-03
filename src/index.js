import React from 'react'
import ReactDOM from 'react-dom'
import store from 'store'
import App from './App'
import {checkSession} from 'common/actions/session'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
window.__forceSmoothScrollPolyfill__ = true
require('smoothscroll-polyfill').polyfill()

import 'basscss/css/basscss.min.css'
import 'sanitize.css'
import './app.css'

const muiTheme = getMuiTheme({
  fontFamily: 'Nunito, sans-serif',
  palette: {
    primary1Color: '#007ec6',
    primary2Color: '#007ec6',
    secondary1Color: '#2c3e50'
  }
})

injectTapEventPlugin()
store.dispatch(checkSession())

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App store={store}/>
  </MuiThemeProvider>,
  document.getElementById('root')
)
