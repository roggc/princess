import * as types from 'comps/redux/app/redux/types'

export default
(val=
{
  greeting:{greeting2:{greeting3:'hello app'}}
},act)=>
{
  switch (act.type)
  {
    case types.APP_SET_GREETING:
      val=
      {
        ...val,
        greeting:{greeting2:{greeting3:act.val}}
      }
      return val
    default:
      return val
  }
}
