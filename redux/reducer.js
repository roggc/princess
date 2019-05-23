import {combineReducers} from 'redux'
import app from 'comps/redux/app/redux/reducer'

export default combineReducers
(
  {
    components: combineReducers
    (
      {
        app: app
      }
    )
  }
)
