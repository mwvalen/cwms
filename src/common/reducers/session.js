import {
  CHECK_SESSION,
  SESSION_START,
  SESSION_END,
  SESSION_START_FAILED
} from 'common/actions/types'

const INITIAL_STATE = {
  checkingSession: true,
  hasSession: false,
  sessionError: '',
  sessionType: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SESSION_START:
      return {
        checkingSession: false,
        hasSession: true,
        sessionError: '',
        sessionType: action.payload
      }
    case SESSION_END:
      return {
        checkingSession: false,
        hasSession: false,
        sessionError: '',
        sessionType: ''
      }
    case SESSION_START_FAILED:
      return {
        checkingSession: false,
        hasSession: false,
        sessionError: action.payload,
        sessionType: ''
      }
  }
  return state
}
