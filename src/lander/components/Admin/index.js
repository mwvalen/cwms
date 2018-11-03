import {connect} from 'react-redux'
import React from 'react'
import {adminLogin} from 'common/actions/session'
import Login from 'common/components/Login'
import styles from './styles.css'

class AdminLogin extends React.Component {
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
    this.props.adminLogin(this.state.username, this.state.password)
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
          <h3>Admin Login</h3>
          <Login className={styles.loginContainer}
            {...this.state} handleUserNameChange={this.handleUserNameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleSubmit={this.handleSubmit} />
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
export default connect(mapStateToProps, {adminLogin})(AdminLogin)
