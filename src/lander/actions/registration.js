import {
  CLEAR_REGISTRATION,
  SET_REGISTRATION,
  SET_IS_CAMP
} from './types'

export const registerCourses = courses => {
  return {
    type: SET_REGISTRATION,
    payload: {
      courses
    }
  }
}

export const registerStudent = student => {
  return {
    type: SET_REGISTRATION,
    payload: {
      student
    }
  }
}

export const registerPayment = payment => {
  return {
    type: SET_REGISTRATION,
    payload: {
      payment
    }
  }
}

export const recordCharge = charge => {
  return {
    type: SET_REGISTRATION,
    payload: {
      charge
    }
  }
}

export const clearRegistration = () => {
  return {
    type: CLEAR_REGISTRATION
  }
}

export const setRegistrationError = error => {
  return {
    type: SET_REGISTRATION,
    payload: {
      error
    }
  }
}

export const setIsCamp = isCamp => {
  return {
    type: SET_IS_CAMP,
    payload: isCamp
  }
}

export const flipMode = isCamp => {
  return {
    type: 'flipMode',
    payload: isCamp
  }
}
