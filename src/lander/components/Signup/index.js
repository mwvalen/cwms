import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import AutoComplete from 'material-ui/AutoComplete'
import Checkbox from 'material-ui/Checkbox'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {signup} from 'common/actions/session'
import AvatarCarousel from 'common/components/AvatarCarousel'
import CourseForSchool from 'lander/components/CourseForSchool'
import {getErrorMessage} from 'common/util/error'
import {chessLevels} from 'lander/constants'
import layoutStyles from 'common/themes/layout.css'
import styles from 'common/themes/form.css'
import signupStyles from './styles.css'

const NoCourseMessage = ({name}) => {
  return (
    <div>
      {`No courses found for ${name}`}
    </div>
  )
}

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      level: 'pawn',
      schoolId: '',
      coursesForSchool: '',
      searchText: '',
      schoolError: '',
      schoolName: '',
      selectedRows: [],
      courseId: '',
      viewSchools: false
    }
  }
  render () {
    const hideAutoFillColorStyle = {
        WebkitBoxShadow: '0 0 0 1000px white inset'
    }
    const hintStyle = {
      zIndex: '1',
      pointerEvents: 'none'
    }
    const menuProps = {
      desktop: true,
      disableAutoFocus: true,
    }
    return (
      <div style={{paddingTop: '20px'}} className={`flex justify-center ${layoutStyles.container}`}>
        <AvatarCarousel />
        <form style={{width: '600px', margin: '0'}}
          className={`${styles.form} ${signupStyles.signupForm}`}
          onSubmit={this.handleSubmit.bind(this)}>
          {
            this.state.error &&
            <p style={{color: '#f44336'}}>
              {this.state.error}
            </p>
          }
          <h1>Sign up</h1>
          <div>
            <TextField hintText="Enter your first name"
              type="text"
              required
              fullWidth={true}
              value={this.state.firstName}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              onChange={this.handleFirstNameChange.bind(this)} />
          </div>
          <div>
            <TextField hintText="Enter your last name"
              type="text"
              required
              value={this.state.lastName}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              fullWidth={true}
              onChange={this.handleLastNameChange.bind(this)} />
          </div>
          <div>
            <TextField hintText="Enter your email"
              type="email"
              required
              value={this.state.email}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              fullWidth={true}
              onChange={this.handleEmailChange.bind(this)} />
          </div>
          <div>
            <TextField hintText="Enter your username"
              type="text"
              required
              value={this.state.username}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              fullWidth={true}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
          <div>
            <TextField hintText="Enter your password"
              type="password"
              required
              floatingLabelText="Password"
              value={this.state.password}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              fullWidth={true}
              onChange={this.handlePasswordChange.bind(this)} />
          </div>
          <div>
            <DropDownMenu required value={this.state.level}
              onChange={this.handleLevelChange}
              style={{width: '400px', right: '24px'}}
              menuItemStyle={{textTransform: 'capitalize'}}
              labelStyle={{textTransform: 'capitalize'}}
              autoWidth={false}>
              {
                chessLevels.map(level => {
                  return <MenuItem key={level} value={level} primaryText={level} />
                })
              }
            </DropDownMenu>
          </div>
          <div>
            <RaisedButton style={{marginRight: '20px'}} type="submit"
              disabledBackgroundColor="#aaa"
              disabled={this.state.loading}
              label={`${this.state.loading ? '...' : 'Sign up'}`}
              primary={true} />
            <RaisedButton type="button" onClick={this.navigateToRoot}
              secondary={true} label="Cancel"/>
          </div>
        </form>
      </div>
    )
  }
  navigateToRoot = () => {
    this.props.history.push('/')
  }
  handleCheckbox = () => {
    this.setState(prevState => {
      const nextViewSchools = !prevState.viewSchools
      const update = {
        viewSchools: nextViewSchools
      }
      if (!nextViewSchools) {
        Object.assign(update, {
          schoolId: '',
          schoolName: '',
          searchText: '',
          coursesForSchool: [],
          selectedRows: [],
          schoolError: '',
          courseId: ''
        })
      }
      return update
    })
  }
  handleInputChange (searchText) {
    this.setState({
      searchText
    })
  }
  handleRowSelect = selectedRows => {
    this.setState(prevState => {
      return {
        selectedRows,
        courseId: selectedRows.length ?
          prevState.coursesForSchool[selectedRows[0]]._id
          : ''
      }
    })
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange (event) {
    this.setState({
      password: event.target.value
    })
  }
  handleFirstNameChange (event) {
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastNameChange (event) {
    this.setState({
      lastName: event.target.value
    })
  }
  handleEmailChange (event) {
    this.setState({
      email: event.target.value
    })
  }
  handleLevelChange = (event, index, level) => {
    this.setState({
      level
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    const username = this.state.username.trim()
    const newUser = {
      username,
      password: this.state.password,
      email: this.state.email,
      personal: {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      },
      level: this.state.level.replace(/\s/g, ''),
      courseId: this.state.courseId
    }
    this.setState({loading: true})
    this.props.signup(newUser)
      .catch((err={}) => {
        const message = getErrorMessage(err)
        window.scrollTo(0, 0);
        this.setState({
          username,
          loading: false,
          error: message || 'Could not sign up new user.  Please try again or contact info@chesswithmrs.com'
        })
      })
  }
}
const mapStateToProps = ({session, schools, courses}) => {
  return {
    error: session.sessionError,
    schools: schools.schools || [],
    courses: courses.courses
  }
}
export default withRouter(connect(mapStateToProps, {signup})(Signup))
