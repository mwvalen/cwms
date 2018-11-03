import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import styles from 'common/themes/form.css'

const ErrorPage = props => {
  const handleSubmit = event => {
    event.preventDefault()
    props.history.replace('/register/payment')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Error Code: <strong>{props.error.status}</strong></h1>
      <div style={{fontSize: '24px', marginBottom: '20px'}}>
        Unfortunately an error occurred during your registration.  The
        server message is: <div><strong>{props.error.message}</strong></div>
        For help please contact info@chesswithmrs.com.  To try again press the button below.
      </div>
      <RaisedButton type="submit" primary={true} label="Try Again" />
    </form>
  )
}

const mapStateToProps = ({registration}) => {
  return {
    ...registration
  }
}
export default withRouter(
  connect(mapStateToProps, {})(ErrorPage)
)
