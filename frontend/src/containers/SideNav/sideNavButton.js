/* eslint-disable linebreak-style */
import React from 'react'
import { NavCloseButton, NavOpenButton, Bar } from './styles'


export const SideNavButton = ({ navOpen, setNavOpen }) => (
  <div>
    
    <NavOpenButton type="button" onClick={() => setNavOpen(true)} navOpen={navOpen}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </NavOpenButton>
  </div>
)


export const CloseButton = ({ navOpen, setNavOpen }) => (
  <NavCloseButton type="button" onClick={() => setNavOpen(false)} navOpen={navOpen}>&times;</NavCloseButton>

)

export default SideNavButton
