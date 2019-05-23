import * as types from 'comps/app/redux/types'

export default
(val=
{
  greeting:'hello app'
},act)=>
{
  switch (act.type)
  {
    case types.APP_SET_GREETING:
      val=
      {
        ...val,
        greeting:act.val
      }
      return val
    default:
      return val
  }
}
