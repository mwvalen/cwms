import {connect} from 'react-redux'
import React from 'react'
import {Redirect} from 'react-router'
import {Switch, withRouter} from 'react-router-dom'
import Route from 'common/components/ScrollToTopRoute'
import RegistrationStepper from './RegistrationStepper'
import EveningCourseSelection from './EveningCourseSelection'
import CampSelection from './CampSelection'
import CourseSelection from './CourseSelection'
import StudentDetails from './StudentDetails'
import PaymentDetails from './PaymentDetails'
import Purchase from './Purchase'
import ConfirmationPage from './ConfirmationPage'
import RegisterHome from './RegisterHome'
import ErrorPage from './ErrorPage'
import styles from 'common/themes/layout.css'

const mapStateToProps = ({registration}) => {
  return {
    registration
  }
}

class RegistrationWizard extends React.Component {
  getActiveStep = pathname => {
    switch (true) {
      case pathname.includes('/info'):
        return 1
      case pathname.includes('/payment'):
        return 2
      case pathname.includes('/purchase') ||
        pathname.includes('/confirmation'):
        return 3
      default:
        return 0
    }
  }
  render () {
    const paddingStyle = {
      padding: '20px 5%'
    }
    return (
      <div className={styles.container}>
        <div style={paddingStyle}>
          <RegistrationStepper
            activeStep={this.getActiveStep(this.props.location.pathname)}/>
        </div>
        <Switch>
          <Route exact path="/register" component={RegisterHome} />
          <Route exact path="/register-school" component={CourseSelection} />
          <Route exact path="/register-camp" component={CampSelection} />
          <Route exact path="/register-evening" component={EveningCourseSelection} />
          <Route path="/register/info" component={StudentDetails} />
          <Route path="/register/payment" component={PaymentDetails} />
          <Route path="/register/purchase" component={Purchase} />
          <Route path="/register/confirmation" component={ConfirmationPage} />
          <Route path="/register/error" component={ErrorPage} />
          <Route path="*" component={Redirect} componentProps={{to: "/"}} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(
  connect(mapStateToProps, {})(RegistrationWizard)
)
