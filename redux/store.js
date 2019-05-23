import {createStore} from 'redux'
import reducer from 'redux/reducer'

export default
(
  ()=>
  {
    return createStore(reducer)
  }
)()
