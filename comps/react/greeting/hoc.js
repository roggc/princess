import React from 'react'

export default Comp=>
class extends React.Component
{
  constructor({state,...props})
  {
    super(props)
    this.state={state:{...state,greeting:'hello'}}
    this.inputRef=null
    this.getRef=el=>this.inputRef=el
    this.onClick=()=>
    {
      this.setState({state:{...this.state.state,greeting:this.inputRef.value}})
    }
    this.props2=
    {
      onClick:this.onClick
      ,getRef:this.getRef
    }
  }

  render()
  {
    return <Comp {...this.props2} {...this.state} {...this.props}/>
  }
}
