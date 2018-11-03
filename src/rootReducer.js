import {combineReducers} from 'redux'

import commonReducers from 'common/reducers'
import landerReducers from 'lander/reducers'
import schoolReducers from 'school/reducers'
import adminReducers from 'admin/reducers'

export default combineReducers({
  ...commonReducers,
  ...landerReducers,
  ...schoolReducers,
  ...adminReducers
})
