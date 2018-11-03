import {
  ADD_TEACHER,
  UPDATE_TEACHER,
  LOAD_TEACHERS_FAILED,
  SET_TEACHERS
} from 'admin/actions/types'

const INITIAL_STATE = {
  teachers: null,
  teachersError: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TEACHER:
      const updatedTeacher = state.teachers
        .find(teacher => teacher._id === action.payload._id)
      if (!updatedTeacher) {
        break
      }
      const updatedTeachers = state.teachers.slice(0)
      updatedTeachers[updatedTeachers.indexOf(updatedTeacher)] = action.payload
      return {
        teachers: updatedTeachers,
        teachersError: ''
      }
    case ADD_TEACHER:
      return {
        teachers: (state.teachers || []).slice(0).concat(action.payload),
        teachersError: ''
      }
    case SET_TEACHERS:
      return {
        teachers: action.payload,
        teachersError: ''
      }
    case LOAD_TEACHERS_FAILED:
      return {
        teachers: null,
        teachersError: action.payload
      }
  }
  return state
}
