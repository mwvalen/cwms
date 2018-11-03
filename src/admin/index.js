import {connect} from 'react-redux'
import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import {getCurrentSeason} from 'common/util/season'
import {withRouter} from 'react-router-dom'
import {logout} from 'common/actions/session'
import {loadTeachers} from 'admin/actions/teachers'
import {loadSchools} from 'lander/actions/schools'
import {loadCourses} from 'lander/actions/courses'
import Navbar from 'common/components/Navbar'
import {NavLinkBtn} from 'common/components/Navbar/nav-link'
import Courses from 'admin/components/Courses'
import Homework from 'admin/components/Homework'
import Registration from 'admin/components/Registration'
import {navLinks} from 'admin/constants'
import styles from './styles.css'

const ElevatedView = () => {
  return (
    <Switch>
      <Route path="/registration" component={Registration}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/homework" component={Homework}/>
      <Route path="*" render={() => <Redirect to="/registration"/>}/>
    </Switch>
  )
}

const TeacherView = () => {
  return (
    <Switch>
      <Route path="/homework" component={Homework}/>
      <Route path="*" render={() => <Redirect to="/homework"/>}/>
    </Switch>
  )
}

class AdminPage extends React.Component {
  componentDidMount () {
    if (!this.props.teachers) {
      this.props.loadTeachers()
    }
    if (!this.props.schools.length) {
      this.props.loadSchools()
    }
    this.props.loadCourses(getCurrentSeason(), true)
  }
  render () {
    const filteredNavLinks = this.props.username === 'ashahi'
      ? navLinks
      : navLinks.filter(({name}) => name.toLowerCase() === 'homework')
    return (
      <div className={styles.adminPage}>
        <Navbar links={filteredNavLinks}>
          <NavLinkBtn name="Logout" handleClick={this.props.logout}/>
        </Navbar>
        <div>
            {
              this.props.username === 'ashahi' &&
              <ElevatedView />
            }
            {
              this.props.username !== 'ashahi' &&
              <TeacherView />
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({teachers, schools, courses, user}) =>
  ({...teachers, ...schools, ...courses, ...user})
export default withRouter(
  connect(mapStateToProps, {logout, loadTeachers, loadSchools, loadCourses})(AdminPage)
)
