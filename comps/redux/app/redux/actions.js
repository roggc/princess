import * as types from 'comps/app/redux/types'

export const appSetGreeting=val=>
(
  {
    type:types.APP_SET_GREETING,
    val:val
  }
)
