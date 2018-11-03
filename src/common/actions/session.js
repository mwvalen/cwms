import axios from 'axios'

import {getErrorMessage} from 'common/util/error'
import {
  SESSION_START,
  SESSION_END,
  SESSION_START_FAILED,
  CLEAR_USER
} from './types'
import {setUser} from './user.js'

export const checkSession = () => dispatch => {
  axios.get('/api/check-session')
    .then(response => {
      const sessionType = response.data
      if (sessionType !== 'noSession') {
        axios.get('/api/user')
          .then(response => {
            dispatch(setUser(response.data))
            dispatch({
              type: SESSION_START,
              payload: sessionType.slice(0, sessionType.indexOf('Session'))
            })
          })
      } else {
        dispatch({
          type: SESSION_END
        })
      }
    })
}

export const adminLogin = (username, password) => dispatch => {
  const fallback = 'Incorrect username or password'
  axios.post('/api/login/admin', {username, password})
    .then(response => {
      dispatch(setUser(response.data))
      dispatch({
        type: SESSION_START,
        payload: 'admin'
      })
    })
    .catch(error => {
      dispatch({
        type: SESSION_START_FAILED,
        payload: getErrorMessage(error, fallback)
      })
    })
}

export const login = (username, password) => dispatch => {
  const fallback = 'Incorrect username or password'
  axios.post('/login', {username, password})
    .then(response => {
      dispatch(setUser(response.data))
      dispatch({
        type: SESSION_START,
        payload: 'student'
      })
    })
    .catch(error => {
      dispatch({
        type: SESSION_START_FAILED,
        payload: getErrorMessage(error, fallback)
      })
    })
}

export const logout = () => dispatch => {
  axios.post('/api/logout')
    .then(response => {
      dispatch({
        type: SESSION_END
      })
      dispatch({
        type: CLEAR_USER
      })
    })
}

export const signup = (newUser) => dispatch => {
  const fallback = 'Could not create user'
  return axios.post('/api/signup', newUser)
    .then(response => {
      dispatch(setUser(response.data))
      dispatch({
        type: SESSION_START,
        payload: 'student'
      })
    })
}
