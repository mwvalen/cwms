import axios from 'axios'
import {getErrorMessage} from 'common/util/error'
import {
  CREATE_USER_PAYMENT,
  CREATE_USER_PAYMENT_FAILED
} from './types'

export const createUserPayment = token => dispatch => {
  const fallbackErrorMessage = 'Could not create payment'
  axios.post('/api/create-stripe-customer', token)
    .then(response => {
      dispatch({
        type: CREATE_USER_PAYMENT,
        //return the stripeID for the created customer
        payload: response.data.customer.id
      })
    })
    .catch(error => {
      dispatch({
        type: CREATE_USER_PAYMENT_FAILED,
        payload: getErrorMessage(error, fallbackErrorMessage)
      })
    })
}
