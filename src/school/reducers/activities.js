import {
  SET_ACTIVITIES
} from 'school/actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        ...action.payload
      }
  }
  return state
}
