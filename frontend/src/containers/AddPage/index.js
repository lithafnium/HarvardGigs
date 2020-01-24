import React from 'react'
import { Container, Font } from '../Dashboard/styles'
import SideNavDiv from '../Dashboard/sidenavdiv'
import Form from './form'
import { InnerDiv, Button, Input } from './styles'

const AddPage = () => (
  <Font>
    <Container style={{
      alignItems: 'center',
      paddingBottom: '0px',
      paddingTop: '20px',
    }}
    >
      <SideNavDiv />
      <h1>YardSale</h1>
    </Container>

    <Form />
  </Font>
)


export default AddPage
