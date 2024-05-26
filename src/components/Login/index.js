import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  MainContainer,
  FormContainer,
  Heading,
  Label,
  Input,
  InputContainer,
  Button,
  ErrorMessage,
  LoginDetails,
} from './styledComponents'

const Login = props => {
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeUserName = event => {
    setUserName(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = () => {
    const {history} = props
    const jwtToken = ''

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onSubmitFailure = error => {
    setErrorMsg(error)
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <MainContainer>
      <LoginDetails>
        <p>Username: rahul</p>
        <p>Password: rahul@2021</p>
      </LoginDetails>
      <FormContainer onSubmit={onSubmitForm}>
        <Heading>Login Form</Heading>
        <InputContainer>
          <Label htmlFor="userName">Enter UserName </Label>
          <Input
            type="text"
            id="userName"
            value={userName}
            onChange={onChangeUserName}
          />
          <Label htmlFor="password">Enter Password </Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </InputContainer>
        <ErrorMessage>{errorMsg}</ErrorMessage>
        <Button type="submit">Login</Button>
      </FormContainer>
    </MainContainer>
  )
}

export default Login
