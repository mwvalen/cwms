import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
import CourseTable from './CourseTable'
import {registerCourses, setIsCamp, flipMode} from 'lander/actions/registration'
import styles from 'common/themes/form.css'
import registrationStyles from './styles.css'

const NoCourseMessage = props => {
  return (
    <div className={registrationStyles.noCourseText}>There are no courses currently scheduled for your school.<br />
      <a href="/contactus">Sign up your school for Chess with Mr. S</a></div>
  )
}

const schoolFilter = (searchText, key) => {
  return searchText !== '' &&
    key.toLowerCase().indexOf(searchText.toLowerCase()) === 0
}

class CourseSelection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      schoolName: '',
      schoolId: '',
      schoolError: '',
      coursesForSchool: [],
      selectedRows: [],
      total: 0,
      searchText: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.registerCourses(
      this.state.coursesForSchool
        .filter((school, idx) => this.state.selectedRows.includes(idx))
    )
    this.props.history.push('/register/info')
  }
  handleBlur = event => {
    const school = this.props.schools
      .find(school => school.name === event.target.value)
    if (!school) {
      this.setState({
        schoolId: '',
        schoolName: '',
        searchText: '',
        coursesForSchool: [],
        selectedRows: [],
        total: 0,
        schoolError: 'This field is required'
      })
    }
  }
  handleInputChange (searchText) {
    this.setState({
      searchText
    })
  }
  handleRowSelect = selectedRows => {
    this.setState({
      selectedRows
    })
  }
  handleSchoolNameChange (schoolName) {
    const school = this.props.schools.find(school => school.name === schoolName)
    if (!school) {
      this.setState({
        schoolId: '',
        schoolName: '',
        searchText: ''
      })
    } else {
      this.setState({
        schoolError: '',
        schoolName,
        schoolId: school._id,
        coursesForSchool: this.props.courses
          .filter(course => course.school._id === school._id),
        selectedCourses: []
      })
    }
  }
  render () {
    const labelStyle = {
      color: 'rgba(0, 0, 0, 0.7)'
    }
    const menuProps = {
      desktop: true,
      disableAutoFocus: true,
    }
    return (
      <form style={{minHeight: '100vh'}} className={styles.form} onSubmit={this.handleSubmit}>
        <div style={{textAlign: 'center', width: '80%', margin: 'auto'}}>
          <div>
            <img src="/assets/shield.png" alt="shield" style={{width: '200px'}} />
          </div>
          <h1 style={{fontWeight: 'bold', fontSize: '2em', border: 'none'}}>
            CWMS School Programs
          </h1>
          <p style={{fontSize: '18px'}}>
            Type the name of your school into the searchbox below to see a listing of Chess with Mr. S programs
            at your school. Do not hesitate to
            <a href="/contactus"> Contact us </a> if you have any questions.
          </p>
        </div>
        <section style={{width: '600px'}}>
          <AutoComplete
            hintText="Enter school name"
            floatingLabelText="Find your school"
            filter={schoolFilter}
            dataSource={this.props.schools.map(({name}) => name)}
            menuProps={menuProps}
            searchText={this.state.searchText}
            errorText={this.state.schoolError}
            onBlur={this.handleBlur}
            onNewRequest={this.handleSchoolNameChange.bind(this)}
            onUpdateInput={this.handleInputChange.bind(this)}
            maxSearchResults={5}
            fullWidth={true}
            />
        </section>
        {this.state.schoolId &&
          <section>
            <h3>Upcoming Courses for {this.state.schoolName}</h3>
            {
              this.state.coursesForSchool.length > 0
                ? <CourseTable selectedRows={this.state.selectedRows}
                    handleRowSelect={this.handleRowSelect}
                    courses={this.state.coursesForSchool}
                    total={this.state.coursesForSchool.reduce((sum, course, idx) => {
                      return this.state.selectedRows.includes(idx) ?
                        (sum + course.price) : sum;
                    }, 0)}/>
                : <NoCourseMessage />
            }
          </section>
        }
        <div>
          <RaisedButton
            disabled={this.state.selectedRows.length < 1}
            primary={true}
            type="submit"
            label="Next" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({registration, schools, courses}) => {
  return {
    registration,
    schools: schools.schools || [],
    courses: (courses.courses || []).filter(({afterSchool}) => !afterSchool)
  }
}
export default withRouter(
  connect(mapStateToProps, {registerCourses, setIsCamp, flipMode})(CourseSelection)
)
