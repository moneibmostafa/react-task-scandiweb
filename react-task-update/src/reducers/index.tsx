import { combineReducers } from 'redux'

import { homepage } from './homepage.reducer'
import { navbar } from './navbar.reducer'
import { cart } from './cart.reducer'

const appReducer = combineReducers({
  homepage,
  navbar,
  cart,
})

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export type AppState = ReturnType<typeof rootReducer>
