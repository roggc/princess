import React from 'react'
import App from 'comps/redux/app/app'
import {Provider} from 'react-redux'
import store from 'redux/store'

export default
(
  ()=>
  <Provider store={store}>
    <App/>
    <App greeting='goodbye lord'/>
  </Provider>
)()
