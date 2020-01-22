import React from 'react'
import FilterBar from './filterbar'
import Search from './search'
import Gigs from './gigs'
import { Container, RightContainer, navOpenButton } from './styles'
import SideNavDiv from './sidenavdiv'


const Dashboard = () => (
  <div>
    <SideNavDiv />
    <Container>

      <FilterBar />
      <RightContainer>
        <Search />
        <Gigs />
      </RightContainer>

    </Container>
  </div>
)


export default Dashboard
