import {SET_USER_PERSONAL} from './types'

export const setUserPersonal = personal => dispatch => {
  return axios.put('/api/user', {personal})
    .then(response => {
      dispatch({
        type: SET_USER_PERSONAL,
        payload: personal
      })
    })
}
