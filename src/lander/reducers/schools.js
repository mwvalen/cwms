import {
  ADD_SCHOOL,
  UPDATE_SCHOOL,
  LOAD_SCHOOLS_FAILED,
  SET_SCHOOLS
} from 'lander/actions/types'

const INITIAL_STATE = {
  schools: [],
  schoolsError: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCHOOL:
      const updatedSchool = state.schools
        .find(school => school._id === action.payload._id)
      if (!updatedSchool) {
        break
      }
      const updatedSchools = state.schools.slice(0)
      updatedSchools[updatedSchools.indexOf(updatedSchool)] = action.payload
      return {
        schools: updatedSchools,
        schoolsError: ''
      }
    case ADD_SCHOOL:
      return {
        schools: (state.schools || []).slice(0).concat(action.payload),
        schoolsError: ''
      }
    case SET_SCHOOLS:
      return {
        schools: action.payload,
        schoolsError: ''
      }
    case LOAD_SCHOOLS_FAILED:
      return {
        schools: [],
        schoolsError: action.payload
      }
  }
  return state
}
