import {
  CLEAR_REGISTRATION,
  SET_REGISTRATION,
  SET_IS_CAMP
} from 'lander/actions/types'

const initState = () => {
  return {
    courses: [],
    student: {
      firstName: '',
      lastName: '',
      dateOfBirth: null,
      allergies: '',
      notes: '',
      level: '',
      guardians: [{
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      }]
    },
    payment: {},
    charges: {},
    error: {
      message: '',
      status: ''
    },
    isCamp: false
  }
}
const INITIAL_STATE = initState()

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_REGISTRATION:
      return initState()
    case SET_REGISTRATION:
      return {
        ...state,
        ...action.payload
      }
    case SET_IS_CAMP:
      return {
        ...state,
        isCamp: action.payload
      }
    case 'flipMode':
      return {
        ...initState(),
        isCamp: action.payload
      }
  }
  return state
}
