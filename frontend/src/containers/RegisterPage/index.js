/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Link, Container, LoginContainer, Input, Title, Font, PictureContainer, InnerLogin
} from '../LoginPage/styles'
import { SignupButton } from '../Home/styles'
import { REGISTER } from './graphql.js'

const Register = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [register, {error, loading }] = useMutation(REGISTER, {
    variables: {
      user:{
    email,
    firstName,
    lastName,
    password,
      }
  },
  onError: () => {},
  onCompleted: ({ register: { token } }) => {
    localStorage.setItem('token', token)
    history.push('/dashboard')
  },
  })
  if (error) {
    console.log(error)
    return <p>Invalid email or password.</p>
  }

  return (
    <Font>
      <Container>
        <LoginContainer>
          <InnerLogin>
            <Title><span style={{ color: "#900c3f" }} >Register</span> your account</Title>
            <Input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <Input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
            <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input placeholder="password" /*value={password} onChange={e => setPassword(e.target.value)} */ />
            <Input placeholder="Re-enter password" value={password} onChange={e => setPassword(e.target.value)} />

            <SignupButton onClick = {register}>Register</SignupButton>

            <p style={{ textAlign: "center" }}>Already have an account? <a href="/login">Login</a></p>
          </InnerLogin>
        </LoginContainer>
        <PictureContainer>
          <img src="/register.svg" />
          <p style={{ color: "white" }}>Register to get the full user experience</p>
        </PictureContainer>
      </Container>
    </Font>
  )
}

export default Register
