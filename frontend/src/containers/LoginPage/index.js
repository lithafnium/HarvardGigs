/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Link, Container, LoginContainer, Input, Title, Font,
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

        <LoginContainer>
          <Title>Login</Title>
          <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <Button email={email} password={password} />
          <p>Need to make an account?</p>
          <Link to="/register">
            <SignupButton>Signup</SignupButton>
          </Link>
        </LoginContainer>
      </Container>
    </Font>

  )
}

export default Login
