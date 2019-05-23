import React from 'react'
import hoc from 'comps/react/greeting/hoc'

export default hoc
(
  ({state,children,getRef,onClick})=>
  <div>
    <input ref={getRef}/>
    <button onClick={onClick}>set greeting</button>
    {state.greeting}
    {children}
  </div>
)
