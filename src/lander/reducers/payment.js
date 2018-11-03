import {
  CREATE_USER_PAYMENT,
  CREATE_USER_PAYMENT_FAILED
} from 'lander/actions/types'

const INITIAL_STATE = {
  payment: {},
  paymentError: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case CREATE_USER_PAYMENT:
      return {
        payment: action.payload,
        paymentError: ''
      }
    case CREATE_USER_PAYMENT_FAILED:
      return {
        ...state,
        paymentError: action.payload
      }
  }
  return state
}
