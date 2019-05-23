import React,{Component} from 'react'

export default Comp=>
class extends Component
{
  constructor(props)
  {
    super(props)
    this.state={greeting:'hello'}
    this.inputRef=null
    this.getRef=el=>this.inputRef=el
    this.onClick=()=>this.setState({...this.state,greeting:this.inputRef.value})
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
