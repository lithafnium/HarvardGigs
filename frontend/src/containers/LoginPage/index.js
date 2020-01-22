import React, { useState } from 'react'
import { Link } from './styles'
import { SignupButton } from '../Home/styles'
import { useMutation } from '@apollo/react-hooks'
import LOGIN from './graphql.js'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login] = useMutation(LOGIN, {
        variables: {
            email,
            password,
        },
        onCompleted: ({ login: { token } }) => localStorage.setItem('token', token), 
    })

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px 0',
            width: 300,
        }}
        >
            <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={login}> Login </button>
            <p>Need to make an account?</p>
            <Link to="/register">
                <SignupButton>Signup</SignupButton>
            </Link>
        </div>

    )
}

export default Login
