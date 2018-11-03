import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import {navLinks} from 'school/constants'
import {logout} from 'common/actions/session'
import {loadCourses} from 'lander/actions/courses'
import {loadSchools} from 'lander/actions/schools'
import Navbar from 'common/components/Navbar'
import {NavLinkBtn} from 'common/components/Navbar/nav-link'
import Footer from 'common/components/Footer'
import IconNavbar from 'school/components/IconNavbar'
import CoursePage from 'school/components/CoursePage'
import HomeworkPage from 'school/components/HomeworkPage'
import ProfilePage from 'school/components/ProfilePage'
import Redirect from 'school/components/redirect'
import styles from 'school/components/IconNavbar/styles.css'
import schoolStyles from './styles.css'

const baseIconUrl = '/assets/school'

const CoursePageWithLevel = withRouter(
  props => {
    return (
      <div className={schoolStyles.paper}>
        <CoursePage index={props.match.params.weekNumber - 1 || 0}
          level={props.location.pathname.split('/')[1]}/>
      </div>
    )
  }
)

const routes = navLinks.reduce((arr, link) => {
  const {url:path} = link
  return arr.concat(
    {path, component: CoursePageWithLevel, exact: true},
    {path: `${path}/week/:weekNumber`, component: CoursePageWithLevel, exact: true},
    {path: `${path}/:activity`, component: HomeworkPage, exact: false}
  )
}, [])

class School extends React.Component {
  componentDidMount () {
    this.props.loadCourses()
    this.props.loadSchools()
  }
  isCoursePage = () => {
    return navLinks.map(({url}) => url)
      .some(url => new RegExp(`${url}(/week/.*)?$`).test(this.props.location.pathname))
  }
  render () {
    return (
      <div>
        { this.isCoursePage() &&
          <Navbar links={[]}>
            <IconNavbar baseUrl={baseIconUrl} links={
              navLinks.map(link => {
                return {
                  ...link,
                  className: styles.navLink,
                  active: this.props.location.pathname === link.url
                }
              })
            }/>
            <NavLinkBtn name="Logout" handleClick={this.props.logout}/>
          </Navbar>
        }
        <div>
          <Switch>
            {
              routes.map(route => <Route {...route} />)
            }
            <Route path="/profile" component={ProfilePage}/>
            <Route path="*" component={Redirect}/>
          </Switch>
        </div>
        {
          this.isCoursePage() &&
            <Footer/>
        }
      </div>
    )
  }
}

export default withRouter(
  connect(() => ({}), {logout, loadCourses, loadSchools})(School)
)
