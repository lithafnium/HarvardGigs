/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { SideNavContainer, NavList, NavListItem } from './styles'
import { CloseButton } from './sideNavButton'
// import Home from '../Home'
// import Dashboard from '.'


const SideNav = ({ navOpen, setNavOpen }) => (
  <div>
    <SideNavContainer id="sidenav" navOpen={navOpen}>
      <CloseButton navOpen={navOpen} setNavOpen={setNavOpen} />
      <NavList>
        <NavListItem>
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/dashboard">Dashboard</Link>
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
