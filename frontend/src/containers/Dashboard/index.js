import React from 'react'
import FilterBar from './filterbar'
import Search from './search'
import Gigs from './gigs'
import { Container, RightContainer, navOpenButton, Font } from './styles'
import SideNavDiv from './sidenavdiv'


const Dashboard = () => (
  <Font>
    <Container style = {{alignItems: "center",
                        paddingBottom: "0px"}}>
      <SideNavDiv />
      <Search />
    </Container>

    <Container>

      <RightContainer>
        <FilterBar />
          <Gigs />
      </RightContainer>

    </Container>
  </Font>
)


export default Dashboard
