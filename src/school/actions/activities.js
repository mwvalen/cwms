import axios from 'axios'
import {
  SET_ACTIVITIES
} from './types'

const levels = [
  'pawn',
  'knight',
  'bishop',
  'rook',
  'queen',
  'king',
  'advanced1',
  'advanced2',
  'advanced3'
]

export const loadActivities = level => dispatch => {
  if (!level || !(levels.indexOf(level) > -1)) {
    return Promise.reject(new Error('missing level'))
  }
  return axios.get(`/api/school/activities/${level}`)
    .then(response => {
      const payload = {}
      payload[level] = response.data
      dispatch({
        type: SET_ACTIVITIES,
        payload
      })
    })
}
