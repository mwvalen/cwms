import {
  LOAD_CAMPS_FAILED,
  SET_CAMPS
} from 'lander/actions/types'

const INITIAL_STATE = {
  camps: [],
  campsError: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAMPS:
      return {
        camps: action.payload,
        campsError: ''
      }
    case LOAD_CAMPS_FAILED:
      return {
        camps: [],
        campsError: action.payload
      }
  }
  return state
}
