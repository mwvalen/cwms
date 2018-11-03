import axios from 'axios'
import React from 'react'
import Loader from './components/loader'
import styles from './styles.css'
import landerStyles from '../../styles.css'
import btnStyles from 'common/themes/button.css'

const ContactInput = ({
  value='',
  type='text',
  handleChange,
  placeholder='',
  disabled
}) => (
  <input style={{fontFamily: 'Nunito'}}
    value={value} disabled={disabled}
    required type={type} onChange={handleChange}
    placeholder={placeholder}/>
)

const ContactMessage = ({
  value='',
  handleChange,
  disabled
}) => (
  <textarea value={value} disabled={disabled}
    required rows="10" onChange={handleChange}></textarea>
)

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    success: '',
    error: '',
    isLoading: false
  }
  render () {
    const {name, email, message, success, error, isLoading} = this.state
    return (
      <div className={styles.contactSection}>
        <span id="contactus" style={{position: 'relative', top: '-90px'}}>
        </span>
        <div className={landerStyles.headerSm}>
          <h3>Contact Us</h3>
        </div>
        <div className={`${styles.container} ${landerStyles.container}`}>
          <div className={styles.contact}>
            <form onSubmit={this.handleSubmit}>
              <div>
                <strong>Name</strong>
                <ContactInput label="Name"
                  disabled={isLoading}
                  handleChange={
                    (event) => this.handleChange('name', event.target.value)
                  }
                  value={name}
                 />
              </div>
              <div>
                <strong>Email</strong>
                <ContactInput
                  disabled={isLoading}
                   handleChange={
                     (event) => this.handleChange('email', event.target.value)
                   }
                   type="email"
                   value={email}
                />
              </div>
              <div>
                <strong>Message</strong>
                <ContactMessage
                  disabled={isLoading}
                  handleChange={
                    (event) => this.handleChange('message', event.target.value)
                  }
                  value={message}
                 />
              </div>
              <button className={btnStyles.primaryBtn}
                style={{
                  minWidth: '20%',
                  fontFamily: 'Nunito',
                  cursor: 'pointer',
                  borderRadius: 0
                }}
                disabled={isLoading}>
                {
                  isLoading && <Loader />
                }
                {
                  !isLoading && 'Submit'
                }
              </button>
            </form>
            {
              error && <p>{error}</p>
            }
            {
              success && <p>{success}</p>
            }
            {
              !success && !error &&
                <p>&nbsp;</p>
            }
            <p>5809 Yonge St. North York, ON</p>
            <p>T: 416.456.1599</p>
            <p>E: info@chesswithmrs.com</p>
          </div>
        </div>
      </div>
    )
  }
  handleSubmit = event => {
    event.preventDefault();
    const {name, email, message} = this.state;
    this.setState({
      isLoading: true
    }, () => {
      axios.post('/api/inquiry', {
        name, email, subject: '', message
      })
      .then(response => {
        this.setState({
          name: '',
          email: '',
          message: '',
          isLoading: false,
          success: 'Your message has been delivered!'
        })
      })
      .catch(err => {
        this.setState({
          success: '',
          isLoading: false,
          error: 'Your message could not be delivered'
        })
      })
    })
  }
  handleChange = (key, value) => {
    this.setState({[key]: value})
  }
}

export default Contact
