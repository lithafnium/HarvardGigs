/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { } from './styles'
import SideNav from '../SideNav/sidenav'
import { SideNavButton } from '../SideNav/sideNavButton'


const SideNavDiv = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <SideNav navOpen={navOpen} setNavOpen={setNavOpen} />
      <SideNavButton navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  )
}


export default SideNavDiv
