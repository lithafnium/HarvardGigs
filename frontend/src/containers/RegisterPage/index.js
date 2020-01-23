/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useMutation, useLazyQuery } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'
import {
  Link, Container, LoginContainer, Input, Title, Font, PictureContainer, InnerLogin
} from '../LoginPage/styles'
import { SignupButton } from '../Home/styles'
//import { LOGIN, TESTQUERY } from './graphql.js'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
//   const [login, { error, loading }] = useMutation(LOGIN, {
//     variables: {
//       email,
//       password,
//     },
//     onCompleted: ({ login: { token } }) => {
//       localStorage.setItem('token', token)
//       history.push('/dashboard')
//     },
//   })
//   const [searchPrice] = useLazyQuery(TESTQUERY, {
//     variables: {
//       input: { high: 1000, low: 150 },
//     },
//   })

  return (
    <Font>

    <Container>
        
        <LoginContainer>
          <InnerLogin>

            <Title><span style = {{color: "#900c3f"}} >Register</span> your account</Title>
            <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Input placeholder="Re-enter password" value={password} onChange={e => setPassword(e.target.value)} />

            <SignupButton>Register</SignupButton>

            <p style = {{textAlign: "center"}}>Already have an account? <a href = "/login">Login</a></p>
          </InnerLogin>
        </LoginContainer>
        <PictureContainer>
          <img src = "/register.svg"/>
          <p style = {{color: "white"}}>Register to get the full user experience</p>
          

        </PictureContainer>
    </Container>
    </Font>


  )
}

export default Login
