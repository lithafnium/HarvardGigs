/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Link, Container, LoginContainer, Input, Title, Font,
} from './styles'
import { SignupButton } from '../Home/styles'
import { LOGIN, TESTQUERY } from './graphql.js'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, { error, loading }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
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

  return (
    <Container>
      <Font>
        <LoginContainer>
          <Title>Login</Title>
          <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="button" onClick={login}> Login </button>
          <button type="button" onClick={searchPrice}>Welcome!</button>
          <p>Need to make an account?</p>
          <Link to="/register">
            <SignupButton>Signup</SignupButton>
          </Link>
        </LoginContainer>
      </Font>
    </Container>

  )
}

export default Login
