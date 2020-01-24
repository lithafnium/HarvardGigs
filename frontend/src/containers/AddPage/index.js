import React from 'react'
import {  Font } from '../Dashboard/styles'
import SideNavDiv from '../Dashboard/sidenavdiv'
import Form from './form'
import { Container, InnerDiv, Button, Input, NavContainer } from './styles'

const AddPage = () => (
  <Font>
    <NavContainer>
    <SideNavDiv />
      <h1 style = {{color: "#fff"}}>YardSale</h1>
      </NavContainer>
    <Container style={{
      // alignItems: 'center',
      // paddingBottom: '0px',
      // paddingTop: '20px',
    }}
    >
      

    <Form />
    </Container>

  </Font>
)


export default AddPage
