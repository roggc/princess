import React from 'react'

export default Comp=>
class extends React.Component
{
  constructor({state, ...props})
  {
    super(props)
    this.state={state:state}
  }

  render()
  {
    return <Comp {...this.state} {...this.props}/>
  }
}
