import React from 'react'
import Bio from './Bio'
import Selling from './Selling'
import Sold from './Sold'
import { Font, Container, ItemsContainer } from './styles'

const Profile = () => (
  <Font>
    <Container>
      <Bio />
      <ItemsContainer>
        <Selling />
        <Sold />
      </ItemsContainer>
    </Container>
  </Font>
)

export default Profile
