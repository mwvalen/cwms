import axios from 'axios'
import {getErrorMessage} from 'common/util/error'
import {
  ADD_TEACHER,
  LOAD_TEACHERS_FAILED,
  SET_TEACHERS,
  UPDATE_TEACHER
} from 'admin/actions/types'

export const updateTeacher = teacher => {
  return {
    type: UPDATE_TEACHER,
    payload: teacher
  }
}

export const loadTeacher = teacher => {
  return {
    type: ADD_TEACHER,
    payload: teacher
  }
}

export const loadTeachers = () => dispatch => {
  return axios.get('/api/teachers')
    .then(response => {
      dispatch({
        type: SET_TEACHERS,
        payload: response.data
      })
    })
    .catch(error => {
      const defaultMessage = 'Could not load teachers'
      dispatch({
        type: LOAD_TEACHERS_FAILED,
        payload: getErrorMessage(error, defaultMessage)
      })
    })
}
