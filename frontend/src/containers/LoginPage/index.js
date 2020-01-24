/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Link, Container, LoginContainer, Input, Title, Font, PictureContainer, InnerLogin
} from './styles'
import { SignupButton } from '../Home/styles'
import { LOGIN, TESTQUERY } from './graphql.js'
import Button from './button'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { error, loading }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
    onError: () => {},
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem('token', token)
      history.push('/dashboard')
    },
  })
  const [searchPrice] = useLazyQuery(TESTQUERY, {
    variables: {
      input: { high: 1000, low: 150 },
    },
  })

  if (error) {
    return <p>Invalid email or password.</p>
  }

  return (
    <Font>

    <Container>
        <PictureContainer>
          <img src = "/login.svg"/>
          <p style = {{color: "white"}}>Login to get the full user experience</p>

        </PictureContainer>
        <LoginContainer>
          <InnerLogin>

            <Title><span style = {{color: "#900c3f"}} >Login</span> to your account</Title>
            <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <SignupButton onClick = {login}>Login</SignupButton>

            <p style = {{textAlign: "center"}}>Need to make an account? <a href = "/register">Sign up</a></p>
          </InnerLogin>
        </LoginContainer>
    </Container>
    </Font>



  )
}

export default Login
