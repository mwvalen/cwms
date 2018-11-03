import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
import Currency from 'common/components/Currency'
import Location from 'common/components/Location'
import CourseTable from './CourseTable'
import {registerCourses, setIsCamp, flipMode} from 'lander/actions/registration'
import {additionalInfo, refundPolicy} from './data'
import styles from 'common/themes/form.css'
import landerStyles from './styles.css'

const AdditionalInfo = ({header, bulletPoints}) => (
  <div style={{marginBottom: '20px'}}>
    <h1 style={{fontSize: '2em', fontWeight: 'bold', border: 'none'}}>{header}</h1>
    {
      bulletPoints.map((bulletPoint, idx) => (
        <p style={{fontSize: '18px'}} key={`${header}_${idx}`}>{bulletPoint}</p>
      ))
    }
  </div>
)

const NoCourseMessage = props => {
  return (
    <div>No courses found!</div>
  )
}

class CampSelection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      schoolName: '',
      schoolId: '',
      coursesForSchool: [],
      selectedRows: [],
      total: 0
    }
  }
  componentDidMount () {
    this._init(this.props)
  }
  componentWillReceiveProps (nextProps) {
    this._init(nextProps)
  }
  _init (props) {
    const campSchool = props.campSchool || {}
    this.setState({
      campSchool: props.campSchool,
      schoolId: campSchool._id || '',
      schoolName: campSchool.name || '',
      coursesForSchool: campSchool._id
        ? this.props.camps
          .filter(course => course.school._id === campSchool._id)
        : []
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.registerCourses(
      this.state.coursesForSchool
        .filter((school, idx) => this.state.selectedRows.includes(idx))
    )
    this.props.history.push('/register/info')
  }
  handleRowSelect = selectedRows => {
    this.setState({
      selectedRows
    })
  }
  render () {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div style={{textAlign: 'center', width: '80%', margin: 'auto'}}>
          <div>
            <img src="/assets/shield.png" alt="shield" style={{width: '200px'}} />
          </div>
          <h1 style={{fontWeight: 'bold', fontSize: '2em', border: 'none'}}>
            CWMS 2019 Summer Camp
          </h1>
          <p style={{fontSize: '36px'}}>
            Register <strong>NOW</strong> for our Amazing Super Early Bird Price!
            <br /><Currency style={{fontSize: '36px'}} cents={30900} />
          </p>
          {
            this.state.campSchool &&
              <div>
                <p>Summer camp is to be held at: </p>
                <Location {...this.state.campSchool} />
              </div>
          }
        </div>
        <AdditionalInfo header="Camp Refund Policy" bulletPoints={refundPolicy} />
        <AdditionalInfo header="Additional Info" bulletPoints={additionalInfo} />
        {this.state.schoolId &&
          <section style={{paddingTop: '40px'}}>
            <h1 style={{fontWeight: 'bold', fontSize: '2em', border: 'none'}}>
              Available Summer camp packages
            </h1>
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

const mapStateToProps = ({registration, schools, camps}) => {
  const campSchool = (schools.schools || [])
    .find(school => school.name === 'Sunny Mandarin School')
  return {
    registration,
    campSchool,
    camps: camps.camps
  }
}
export default withRouter(
  connect(mapStateToProps, {registerCourses, setIsCamp, flipMode})(CampSelection)
)
