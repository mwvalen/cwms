import axios from 'axios'
import {SET_USER_PERSONAL} from './types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_PERSONAL:
      return {
        ...state,
        ...action.payload
      }
  }
  return state
}
