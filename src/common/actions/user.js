import axios from 'axios'
import {getErrorMessage} from 'common/util/error'
import {
  CLEAR_USER,
  SET_USER
} from './types'

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const clearUser = user => {
  return {
    type: CLEAR_USER
  }
}

export const updateProgressByLevel = (level, weekNumber, index, data) => dispatch => {
  return axios.post('/api/user/progress-by-level', {
    level, weekNumber, index, data
  })
  .then(({data}) => {
    dispatch({
      type: SET_USER,
      payload: {
        progress: data
      }
    })
  })
}

export const updateUser = (update) => dispatch => {
  return axios.put('/api/user', {...update})
    .then(({data}) => {
      dispatch({
        type: SET_USER,
        payload: data
      })
    })
}
