import {
  LOAD_COURSES_FAILED,
  SET_COURSES,
  ADD_COURSE,
  UPDATE_COURSE
} from 'lander/actions/types'

const INITIAL_STATE = {
  courses: [],
  coursesError: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COURSE:
      return {
        courses: (state.courses || []).slice(0).concat(action.payload),
        coursesError: ''
      }
    case UPDATE_COURSE:
      const updatedCourse = state.courses
        .find(course => course._id === action.payload._id)
      if (!updatedCourse) {
        break
      }
      const updatedCourses = state.courses.slice(0)
      updatedCourses[updatedCourses.indexOf(updatedCourse)] = action.payload
      return {
        courses: updatedCourses,
        coursesError: ''
      }
    case SET_COURSES:
      return {
        courses: action.payload,
        coursesError: ''
      }
    case LOAD_COURSES_FAILED:
      return {
        courses: [],
        coursesError: action.payload
      }
  }
  return state
}
