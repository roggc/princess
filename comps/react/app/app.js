import React from 'react'
import hoc from 'comps/react/app/hoc'
import Greeting from 'comps/react/greeting/greeting'

export default hoc
(
  ({state, ...props})=>
  {
    state={state:state}
    const el=
    <div>
      <Greeting {...state} {...props}>hey</Greeting>
      <Greeting {...state} {...props}/>
    </div>
    return el
  }
)
