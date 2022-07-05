import React from 'react'
// import { withRouter } from 'react-router';
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}
const Home = ({ history }) => {
  const goHome = () => {
    history.push('/app')
  }

  return (
    <button className='goHome' onClick={goHome}>
      Home
    </button>
  )
}

export default withRouter(Home)
