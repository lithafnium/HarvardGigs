import React from 'react'
import Bio from './Bio'
import Selling from './Selling'
import Sold from './Sold'
import { Font, Container, ItemsContainer, Link, NavCloseButton} from './styles'
import SideNav from '../SideNav/sidenav'

const Profile = () => (
  <Font>
    <Container>
      <Bio />
      <ItemsContainer>
        <Selling />
      </ItemsContainer>
    </Container>
  </Font>
)

export default Profile

