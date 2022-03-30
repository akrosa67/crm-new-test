import React, { lazy, Suspense } from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Import Schema
import schema from '../schema'

//Not Found Page
//import NotFoundPage from "pages/NotFoundPage"

const additionalRoutes = (schema || []).filter(_ => _.visible).map(route => Object.assign({}, route, {
  component: () => {
    const page = route.page
    const RoutePage = lazy(() => import(`../pages/${page}`))
    return <Suspense fallback={<div>Loading...</div>}>
      <RoutePage {...route} />
    </Suspense>
  }
}))

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
  { path: "/locations", exact: true, component: () => <Redirect to="/countries" /> }
].concat(additionalRoutes)

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd }
]

export { authProtectedRoutes, publicRoutes }