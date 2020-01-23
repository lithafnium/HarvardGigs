/* eslint-disable linebreak-style */
import React from 'react'
import { NavCloseButton, NavOpenButton, Bar } from './styles'


export const SideNavButton = ({ navOpen, setNavOpen }) => (
  <div>
    
    <NavOpenButton type="button" onClick={() => setNavOpen(true)} navOpen={navOpen}>
      <Bar style = {{width: "30px"}}></Bar>
      <Bar style = {{width: "20px"}}></Bar>
      <Bar style = {{width: "25px"}}></Bar>
    </NavOpenButton>
  </div>
)


export const CloseButton = ({ navOpen, setNavOpen }) => (
  <NavCloseButton type="button" onClick={() => setNavOpen(false)} navOpen={navOpen}>&times;</NavCloseButton>

)

export default SideNavButton
