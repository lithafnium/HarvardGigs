import React from 'react'
import {
  Container, ItemContainer, Title,
} from './styles'
import PGigItem from '../ProfileGigItem'


const Selling = () => (
  <Container>
    <Title>Sold!</Title>
    <ItemContainer>
      <PGigItem />
      <PGigItem />
      <PGigItem />
      <PGigItem />
      <PGigItem />
      <PGigItem />
      <PGigItem />
      <PGigItem />
      <PGigItem />
    </ItemContainer>
  </Container>
)
export default Selling
