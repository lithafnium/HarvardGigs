import React, { useState } from 'react'
import FilterBar from './filterbar'
import Search from './search'
import Gigs from './gigs'
import { Container, RightContainer, navOpenButton, Font, NavBar, ProfilePic, Link, NavbarLink, SignupButton } from './styles'
import SideNavDiv from './sidenavdiv'
import { NavLink } from 'react-router-dom'


const Dashboard = () => {

  const [searchText, setSearchText] = useState('')
  const logout = () => localStorage.removeItem("token")

  return (

    <Font>
      <NavBar >
        <SideNavDiv />
        <h1 style={{ color: "#fff" }}>YardSale</h1>
        <Search setSearchText={setSearchText} searchText={searchText} />
        <NavLink to='./profile'>
          <ProfilePic />
        </NavLink>
        <NavbarLink to="/login">
          <SignupButton onClick={logout}>Log out</SignupButton>
        </NavbarLink>

      </NavBar>

      <Container>

        <RightContainer>
          <FilterBar />
          <Gigs searchText={searchText} />
        </RightContainer>

      </Container>
    </Font>
  )
}


export default Dashboard
