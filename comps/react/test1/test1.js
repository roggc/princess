import hoc from 'comps/react/test1/hoc'
import React from 'react'

export default hoc
(
  ({children:{greeting:{greeting2}},onClick})=>
  <div>
    {greeting2}
    <button onClick={onClick}>change</button>
  </div>
)
