/* eslint-disable linebreak-style */
import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_NAME } from './queries'
import { Link, useHistory } from 'react-router-dom'

import { SideNavContainer, NavList, NavListItem, NavHeader } from './styles'
import { CloseButton } from './sideNavButton'
//import { user } from '../backend / src / lib / context.js
// import Home from '../../Home'
// import Dashboard from '.'


const SideNav = ({ navOpen, setNavOpen }) => {
  const history = useHistory()


  const { loading, error, data } = useQuery(GET_NAME, {
    onError: err => console.log(err),
    onCompleted: dat => console.log(dat)
  });
  
  if (loading) return <h2>Loading</h2>
  if (error) {
    console.log(error);
    history.push("/login"); 
    return <h2></h2>
  }
  return (
    <div>
      <SideNavContainer id="sidenav" navOpen={navOpen}>
        <CloseButton navOpen={navOpen} setNavOpen={setNavOpen} />
        <NavList>
          <NavListItem>
            <Link style = {{textDecoration: "none"}} to="/profile"><h2>{`Hello, ${data.viewer.firstName} ${data.viewer.lastName}!`}</h2></Link>
          </NavListItem>
          <NavListItem>
            <Link  style = {{textDecoration: "none"}} to="/">Home</Link>
          </NavListItem>
          <NavListItem>
            <Link style = {{textDecoration: "none"}} to="/dashboard">Dashboard</Link>
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








 
}


export default SideNav
