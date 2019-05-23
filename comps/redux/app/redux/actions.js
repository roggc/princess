import * as types from 'comps/redux/app/redux/types'

export const appSetGreeting=val=>
(
  {
    type:types.APP_SET_GREETING,
    val:val
  }
)
