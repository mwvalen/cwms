import axios from 'axios'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {createCustomer} from 'lander/util/stripe'
import {registerPayment} from 'lander/actions/registration'
import GoBack from 'common/components/GoBack'
import data from './data'
import styles from 'common/themes/form.css'

const style = {
  base: {
    color: '#32325d',
    lineHeight: '24px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

class PaymentDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      open: false
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    this.stripe.createToken(this.card)
      .then(({error, token}) => {
        if (error) {
          this.setState({
            error: error.message
          })
        } else {
          createCustomer(token.id)
            .then(response => {
              this.props.registerPayment({
                customer: response.data
              })
              this.props.history.push('/register/purchase')
            })
            .catch(error => {
              this.setState({
                error: 'There was an error processing your card.  For help contact info@chesswithmrs.com'
              })
            })
        }
      })
  }
  componentDidMount () {
    const shouldGoBack = !this.props.courses.length ||
      !this.props.student.firstName
    if (shouldGoBack) {
      this.props.history.replace('/register')
      return
    }
    this.stripe = Stripe(data.key)
    this.card = this.stripe.elements().create('card', {style})
    this.card.mount('#card-element')
    this.card.addEventListener('change', event => {
      this.setState({
        error: event.error
      })
    })
  }
  goBack = () => {
    this.props.history.push('/register/info')
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Continue"
        primary={true}
        onClick={this.goBack}
      />
    ]
    const cardSectionStyle = {
      padding: '60px',
      background: '#e6e6e6',
      marginBottom: '20px',
      position: 'relative'
    }
    const stripeBadgeStyle = {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      width: '100px'
    }
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h1>Payment Details</h1>
        <section style={cardSectionStyle}>
          <div id="card-element"></div>
          <div id="card-errors">{this.state.error}</div>
          <img style={stripeBadgeStyle} src="/assets/stripe_badge.png" />
        </section>
        <p>{data.legalWranglings}</p>
        <div>
          <GoBack open={this.state.open}
            actions={actions} />
          <RaisedButton primary={true}
            label="Next"
            type="submit" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({registration}) => {
  return {
    ...registration
  }
}
export default withRouter(
  connect(mapStateToProps, {registerPayment})(PaymentDetails)
)
