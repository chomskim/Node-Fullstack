import React from 'react'
import { BrowserRouter as Router, Route, Navigate, Outlet, Routes } from 'react-router-dom'
import LoginRegisterForm from './components/loginregister'
import Main from './Main'
import User from './User'

export const routing = ({ changeLoginState, loggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginRoute />}>
          <Route path='/' element={<LoginRegisterForm changeLoginState={changeLoginState} />} />
        </Route>
        <Route path='/*' element={<PrivateRoute />}>
          <Route path='app' element={<Main changeLoginState={changeLoginState} />} />
          <Route path='user/:username' element={<User changeLoginState={changeLoginState} />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}

// const PrivateRoute = ({ element: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       rest.loggedIn === true ? (
//         <Component {...props} />
//       ) : (
//         <Navigate
//           replace
//           to={{
//             pathname: '/',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
// )

const PrivateRoute = ({ children, ...rest }) => {
  if (rest.loggedIn === true) {
    return children ? children : <Outlet />
  }

  return (
    <Navigate
      to={{
        pathname: '/',
        state: { from: rest.location },
      }}
      replace
    />
  )
}

const LoginRoute = ({ children, ...rest }) => {
  if (rest.loggedIn === false) {
    return children ? children : <Outlet />
  }

  return (
    <Navigate
      replace
      to={{
        pathname: '/app',
      }}
    />
  )
}

const NotFound = () => {
  return <Navigate to='/' />
}

export default routing
