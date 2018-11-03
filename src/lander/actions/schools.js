import axios from 'axios'
import {getErrorMessage} from 'common/util/error'
import {
  ADD_SCHOOL,
  UPDATE_SCHOOL,
  SET_SCHOOLS,
  LOAD_SCHOOLS_FAILED
} from 'lander/actions/types'

export const updateSchool = school => {
  return {
    type: UPDATE_SCHOOL,
    payload: school
  }
}

export const loadSchool = school => {
  return {
    type: ADD_SCHOOL,
    payload: school
  }
}

export const loadSchools = () => dispatch => {
  return axios.get('/api/schools')
    .then(response => {
      dispatch({
        type: SET_SCHOOLS,
        payload: response.data
      })
    })
    .catch(error => {
      const defaultMessage = 'School is out'
      dispatch({
        type: LOAD_SCHOOLS_FAILED,
        payload: getErrorMessage(error, defaultMessage)
      })
    })
}
