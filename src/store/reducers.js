import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

//Dashboard 
import Dashboard from "./dashboard/reducer"

import session from "./session/reducer"

//Schema
import schema from "../schema"

const additionalReducers = schema.filter(_ => _.visible).reduce((a, el) => el.reducer ? Object.assign({}, a, { [el.name]: el.reducer}) : a,{})

const rootReducer = combineReducers({
  // public
  Layout,
  Dashboard,
  session,
  ...additionalReducers
})

export default rootReducer
