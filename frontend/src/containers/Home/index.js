import React from 'react'
import Navbar from './Navbar'
import Tagline from './Tagline'
import About from './About'
import Team from './Team'
import { Font, Main } from './styles'


const Home = () => (
  <Font>
    <Main>
      <Navbar />
      <Tagline />
    </Main>
    <About />
    <Team />
  </Font>
)


export default Home
