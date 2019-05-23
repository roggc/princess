import React from 'react'
import {connect} from 'react-redux'
import {appSetGreeting} from 'comps/redux/app/redux/actions'

const comp=props=>
{
  const setGreeting=()=>
  {
    props.appSetGreeting(props.greeting)
  }
  const el=
  (
    <div>
      <button onClick={setGreeting}>set greeting</button>
      <div>{props.app.greeting}</div>
    </div>
  )
  return el
}

const mapStateToProps=state=>
{
  const ob=
  {
    app: state.components.app
  }
  return ob
}

const mapDispatchToProps=
{
  appSetGreeting
}

export default connect(mapStateToProps,mapDispatchToProps)(comp)
