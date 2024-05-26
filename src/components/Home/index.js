import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {HomeDiv, LogoutButton, HomeH1} from './styledComponents'

const Home = props => {
  const renderLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <HomeDiv>
        <HomeH1>Welcome to Home</HomeH1>
        <LogoutButton type="button" onClick={renderLogout}>
          Logout
        </LogoutButton>
      </HomeDiv>
    </>
  )
}
export default withRouter(Home)
