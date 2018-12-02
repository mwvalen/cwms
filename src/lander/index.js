import {connect} from 'react-redux'
import React from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-static'
import {getCurrentSeason} from 'common/util/season'
import Navbar from 'common/components/Navbar'
import Footer from 'common/components/Footer'
import ScrollToTopRoute from 'common/components/ScrollToTopRoute'
import LanderPage from 'lander/components/LanderPage'
import {navLinks} from 'lander/constants'
import {NavLinkBtn} from 'common/components/Navbar/nav-link'
import RegistrationWizardPage from 'lander/components/RegistrationWizardPage'
import AdminLoginPage from 'lander/components/Admin'
import StudentLoginPage from 'lander/components/Student'
import ForgotPassword from 'common/components/ForgotPassword'
import ResetPassword from 'common/components/ResetPassword'
import Signup from 'lander/components/Signup'
import {loadCourses, loadCamps} from 'lander/actions/courses'
import {loadSchools} from 'lander/actions/schools'
import btnStyles from 'common/themes/button.css'

const minHeightStyle = {
  minHeight: '100vh'
}

const navBtn = {
  fontSize: '16px',
  padding: '5px 10px'
}

const funWork = {
  background: '#f1b06f',
  borderColor: '#f1b06f',
  borderLeftColor: '#f8d7b6',
  borderTopColor: '#f8d7b6',
  marginRight: '10px'
}

class Lander extends React.Component {
  componentDidMount () {
    this.props.loadCamps()
    this.props.loadCourses(getCurrentSeason())
    this.props.loadSchools()
  }
  isBigLogo = () => {
    return (/signup|login|register|admin|(\w+-password)/i)
      .test(this.props.location.pathname) !== true
  }
  navigateToPath = path => {
    this.props.history.push(path)
  }
  render () {
    return (
      <div>
        <Navbar links={[]} showBigLogo={this.isBigLogo()}>
          <NavLinkBtn name="Homework puzzles"
            style={{...funWork, ...navBtn}}
            className={btnStyles.primaryBtn}
            handleClick={this.navigateToPath.bind(this, '/login')}/>
          <NavLinkBtn name="Register"
            style={navBtn}
            className={btnStyles.primaryBtn}
            handleClick={this.navigateToPath.bind(this, '/register')}/>
        </Navbar>
        <div style={minHeightStyle}>
          <Switch>
            <ScrollToTopRoute exact path="/" component={LanderPage}/>
            <Route path="/contactus" component={LanderPage}/>
            <Route path="/register*" component={RegistrationWizardPage}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/reset-password/:id" component={ResetPassword}/>
            <ScrollToTopRoute path="/admin" component={AdminLoginPage}/>
            <ScrollToTopRoute path="/login" component={StudentLoginPage}/>
            <ScrollToTopRoute path="/signup" component={Signup}/>
            <Route path="*" render={() => <Redirect to="/"/>}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default withRouter(
  connect(() => ({}), {loadCourses, loadCamps, loadSchools})(Lander)
)
