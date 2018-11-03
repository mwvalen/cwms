import React from 'react'
import {connect, Provider} from 'react-redux'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Admin from 'admin'
import Lander from 'lander'
import School from 'school/School'

const getComponent = sessionType => {
  switch (sessionType) {
    case 'admin':
      return <Admin />
    case 'student':
      return <School/>
  }
  return <Lander />
}

const App = props => {
  if (props.checkingSession) {
    return <div></div>
  }

  return (
    <Provider store={props.store}>
      <Router>
        {
          getComponent(props.sessionType)
        }
      </Router>
    </Provider>
  )
}

const mapStateToProps = ({session}) => ({...session})

export default connect(mapStateToProps, {})(App)
