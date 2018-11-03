import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import AutoComplete from 'material-ui/AutoComplete'
import Checkbox from 'material-ui/Checkbox'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import {updateUser} from 'common/actions/user'
import AvatarCarousel from 'common/components/AvatarCarousel'
import CourseForSchool from 'lander/components/CourseForSchool'
import {chessLevels} from 'lander/constants'
import layoutStyles from 'common/themes/layout.css'
import styles from 'common/themes/form.css'
import signupStyles from './styles.css'

const avatars = [
  'pawn',
  'knight',
  'bishop',
  'rook',
  'queen',
  'king',
  'advanced 1',
  'advanced 2',
  'advanced 3'
]

const schoolFilter = (searchText, key) => {
  return searchText !== '' &&
    key.toLowerCase().indexOf(searchText.toLowerCase()) === 0
}

const NoCourseMessage = ({name}) => {
  return (
    <div>
      {`No courses found for ${name}`}
    </div>
  )
}

class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      firstName: (props.personal || {}).firstName || '',
      lastName: (props.personal || {}).lastName || '',
      email: props.email || '',
      level: props.level.replace(/(\d)/g, ' $1') || 'pawn',
      schoolError: '',
      courseId: props.courseId || '',
      viewSchools: props.courseId ? true : false,
      success: '',
      ...this.getCourseInfo(props)
    }
  }
  getCourseInfo = props => {
    const course = props.courses
      .find(c => c._id === props.courseId) || {}
    const school = props.schools
      .find(s => s._id === course.locationId)
    let searchText = '',
      schoolName = '',
      schoolId = '',
      coursesForSchool = '',
      selectedRows = []

    if (school) {
      searchText =
      schoolName = school.name;
      schoolId = school._id
      coursesForSchool = props.courses
        .filter(course => course.school._id === school._id)
      selectedRows = [coursesForSchool.indexOf(course)]
    }
    return {
      searchText, schoolName, schoolId, coursesForSchool, selectedRows
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      firstName: (nextProps.personal || {}).firstName || '',
      lastName: (nextProps.personal || {}).lastName || '',
      email: nextProps.email || '',
      level: nextProps.level.replace(/(\d)/g, ' $1')  || 'pawn',
      courseId: nextProps.courseId || '',
      viewSchools: nextProps.courseId ? true : false,
      ...this.getCourseInfo(nextProps)
    })
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
      <div className={`flex justify-center ${layoutStyles.container}`}>
        <AvatarCarousel index={avatars.indexOf(this.state.level)}
          ref="carousel" autoplay={false}/>
        <form style={{width: '600px', margin: '0'}}
          className={`${styles.form} ${signupStyles.signupForm}`}
          onSubmit={this.handleSubmit.bind(this)}>
          {
            this.state.error &&
            <p style={{color: '#f44336'}}>
              {this.state.error}
            </p>
          }
          {
            this.state.success &&
              <p style={{color: '#5cb85c'}}>
                {this.state.success}
              </p>
          }
          <h1>Edit Profile</h1>
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
            <DropDownMenu required value={this.state.level}
              onChange={this.handleLevelChange}
              style={{width: '400px', right: '24px'}}
              autoWidth={false}
              menuItemStyle={{textTransform: 'capitalize'}}
              labelStyle={{textTransform: 'capitalize'}}>
              {
                chessLevels.map(level => {
                  return <MenuItem key={level} value={level} primaryText={level} />
                })
              }
            </DropDownMenu>
          </div>
          <div style={{marginTop: '20px'}}>
            <RaisedButton style={{marginRight: '20px'}} type="submit"
              disabledBackgroundColor="#aaa"
              disabled={this.state.loading}
              label={`${this.state.loading ? '...' : 'Submit'}`}
              primary={true} />
            <RaisedButton type="button" onClick={this.navigateToRoot}
              secondary={true} label="Back"/>
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
    this.refs.carousel.handleLevelChange(index)
    this.setState({
      level
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    const update = {
      email: this.state.email,
      personal: {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      },
      level: this.state.level.replace(/\s/g, '') || 'pawn',
      courseId: this.state.courseId
    }
    this.setState({loading: true})
    this.props.updateUser(update)
      .then(response => {
        this.setState({loading: false, error: '', success: 'Profile has been successfully updated'})
      })
      .catch(err => {
        this.setState({loading: false, error: 'There was an error updating your profile', success: ''})
      })
  }
}
const mapStateToProps = ({session, schools, courses, user}) => {
  return {
    error: session.sessionError,
    schools: schools.schools || [],
    courses: courses.courses || [],
    ...user
  }
}
export default withRouter(connect(mapStateToProps, {updateUser})(ProfilePage))
