import axios from 'axios'
import {connect} from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import {extractCardInfo, chargeCustomer} from 'lander/util/stripe'
import {recordCharge, setRegistrationError} from 'lander/actions/registration'
import RaisedButton from 'material-ui/RaisedButton'
import {StudentCard, PaymentCard} from './Cards'
import CourseTable from './CourseTable'
import styles from 'common/themes/form.css'

class Purchase extends React.Component {
  constructor (props) {
    super(props)
    this.total = props.courses
      .reduce((sum, course) => sum + course.price, 0)
    this.state = {disableBtn: false}
  }
  componentWillMount () {
    const shouldGoBack = !this.props.courses.length ||
      !this.props.student.firstName ||
      !this.props.customer ||
      !this.props.customer.id
    if (shouldGoBack) {
      this.shouldGoBack = true;
      this.props.history.replace('/register')
    }
  }
  editPreviousPage = url => {
    this.props.history.push(url);
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({disableBtn: true})
    const courses = this.props.courses.map(({_id}) => _id).join(',')
    const {firstName, lastName} = this.props.student
    const description = `student: ${firstName} ${lastName} | courses: ${courses}`
    chargeCustomer(this.props.customer, this.total, description)
      .then(response => {
        this.props.recordCharge(response.data)
        axios.post('/api/register-student', {
          courses: this.props.courses,
          student: this.props.student,
          customerId: response.data.customer
        })
        this.props.history.replace('/register/confirmation')
      })
      .catch(error => {
        const message = (error && error.response &&
          error.response.data && error.response.data.message) ||
          "An Issue Prevented Chess with Mr S from completing the transaction"
        const status = (error && error.response && error.response.status) ||
          500
        this.props.setRegistrationError({
          status,
          message
        })
        this.props.history.replace('/register/error')
      })
  }
  render () {
    if (this.shouldGoBack) {
      return <span></span>
    }
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h1>Review and Purchase</h1>
        <div className="flex">
          <section style={{width:'50%', marginRight: '20px'}}>
            <StudentCard {...this.props.student}
              onEditClick={this.editPreviousPage.bind(null, '/register/info')}/>
          </section>
          <section>
            <PaymentCard {...extractCardInfo(this.props.customer)}
              onEditClick={this.editPreviousPage.bind(null, '/register/payment')} />
          </section>
        </div>
        <section>
          <h1>Your Order</h1>
          <CourseTable courses={this.props.courses} readonly={true} total={this.total}/>
        </section>
        <RaisedButton disabled={this.state.disableBtn} primary={true}
          type="submit"
          label={this.state.disableBtn ? 'Loading...' : 'Purchase'}/>
      </form>
    )
  }
}

const mapStateToProps = ({registration}) => {
  const {student, courses, payment} = registration
  return {
    customer: payment.customer,
    student,
    courses
  }
}
export default withRouter(
  connect(mapStateToProps, {recordCharge, setRegistrationError})(Purchase)
)
