import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {login} from 'common/actions/session'
import Login from 'common/components/Login'
import styles from './styles.css'

class StudentLogin extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: props.error || ''
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state.username.trim(), this.state.password)
  }
  handleUserNameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }
  render () {
    return (
      <div className={styles.adminLogin}>
        <div>
          <h3>Student Login</h3>
          <Login hasForgotPassword={true}
            className={styles.loginContainer}
            {...this.state} handleUserNameChange={this.handleUserNameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit} />
          <div style={{padding: '20px 10px'}}>
            {`Don't have an account ? `}
            <Link to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({session}) => {
  return {
    error: session.sessionError
  }
}
export default connect(mapStateToProps, {login})(StudentLogin)
