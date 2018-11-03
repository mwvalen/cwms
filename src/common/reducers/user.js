import {
  CLEAR_USER,
  SET_USER
} from 'common/actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.payload)
    case CLEAR_USER:
      return {}
  }
  return state
}
