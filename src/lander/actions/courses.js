import axios from 'axios'
import {getErrorMessage} from 'common/util/error'
import {
  ADD_COURSE,
  SET_COURSES,
  LOAD_COURSES_FAILED,
  UPDATE_COURSE,
  SET_CAMPS,
  LOAD_CAMPS,FAILED
} from './types'

export const updateCourse = course => {
  return {
    type: UPDATE_COURSE,
    payload: course
  }
}

export const loadCourse = course => {
  return {
    type: ADD_COURSE,
    payload: course
  }
}

export const loadCamps = () => dispatch => {
  const fallbackErrorMessage = 'Could not retrieve camps'
  axios.get('/api/camps')
    .then(response => {
      dispatch({
        type: SET_CAMPS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: LOAD_CAMPS_FAILED,
        payload: getErrorMessage(error, fallbackErrorMessage)
      })
    })
}

export const loadCourses = (filter, withCamps) => dispatch => {
  const fallbackErrorMessage = 'Could not retrieve courses'
  const url = filter
    ? `/api/courses/${filter.season}/${filter.year}`
    : `/api/courses`

  axios.get(`${url}${withCamps ? '?camps=true' : ''}`)
    .then(response => {
      dispatch({
        type: SET_COURSES,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: LOAD_COURSES_FAILED,
        payload: getErrorMessage(error, fallbackErrorMessage)
      })
    })
}
