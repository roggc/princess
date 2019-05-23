import React from 'react'
import hoc from 'comps/react/app/hoc'

export default hoc
(
  ({greeting,onClick,getRef})=>
  <div>
    <input ref={getRef}/>
    <button onClick={onClick}>set greeting</button>
    {greeting}
  </div>
) 
