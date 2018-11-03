import registrationReducer from './registration'
import coursesReducer from './courses'
import campsReducer from './camps'
import schoolsReducer from './schools'

export default {
  camps: campsReducer,
  courses: coursesReducer,
  registration: registrationReducer,
  schools: schoolsReducer
}
