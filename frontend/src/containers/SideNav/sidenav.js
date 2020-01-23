/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { SideNavContainer, NavList, NavListItem, NavHeader } from './styles'
import { CloseButton } from './sideNavButton'
// import Home from '../Home'
// import Dashboard from '.'


const SideNav = ({ navOpen, setNavOpen }) => (
  <div>
    <SideNavContainer id="sidenav" navOpen={navOpen}>
      <CloseButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavHeader>
        <div style = {{width: "30%"}}>
          <img style = {{width: "100%", height: "auto", borderRadius: "50%"}}src = "/IMG-6432.jpg"/>
        </div>
        <h1 style = {{margin: "30px"}}>Name</h1>
      </NavHeader>
      <NavList>
        <NavListItem>
          <Link style = {{textDecoration: "none"}}to="/">Profile</Link>
        </NavListItem>
        <NavListItem>
          <Link style = {{textDecoration: "none"}} to="/dashboard">Shop</Link>
        </NavListItem>
      </NavList>
    </SideNavContainer>
    {/* <Router>


      <div>
        <Switch>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>

    </Router> */}


  </div>
)


export default SideNav
