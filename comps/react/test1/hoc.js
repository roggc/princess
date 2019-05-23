import React from 'react'

export default C=>
class extends React.Component
{
  constructor(props)
  {
    super(props)
    this.onClick=()=>this.setState
    (
      {
        ...this.state,
        greeting:
        {
          ...this.state.greeting,
          greeting2:'bye'
        }
      }
    )
    this.props2=
    {
      onClick:this.onClick
    }
    this.state=
    {
      greeting:
      {
        greeting2:'hello'
      }
    }
    this.render=()=><C {...this.props2} {...this.props}>{this.state}</C>
  }
}
