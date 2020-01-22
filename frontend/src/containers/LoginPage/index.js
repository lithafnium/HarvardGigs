import React from 'react'
import { Link } from './styles'
import { SignupButton } from '../Home/styles'



const Login = () => (
        <div>
            <input placeholder="email"  />
            <input placeholder="password" />
            <button type="button" > Login </button>
            <p>Need to make an account?</p>
            <Link to="/register">
                <SignupButton>Signup</SignupButton>
            </Link>
        </div>

)


export default Login
