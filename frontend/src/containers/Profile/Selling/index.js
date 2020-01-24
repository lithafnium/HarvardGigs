import React from 'react'
import {
  Container, ItemContainer, Title,
} from './styles'
import  PGigItem  from '../ProfileGigItem'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_VIEW_GIGS, DELETE } from './queries'


const Selling = () => {
  const { loading, error, data } = useQuery(GET_VIEW_GIGS, {
    onError: err => console.log(err) });
  if (loading) return <h2>Loading</h2>
  if (error) {
    console.log(error);
    return (
      <Container>
        <Title>Currently Selling</Title>
        <ItemContainer>
          Something went wrong! My fault.
        </ItemContainer>
      </Container>
    )
  }
  console.log('all gigs: ', data.viewerGigs)
return (
  <Container>
    <Title>Currently Selling</Title>
    <ItemContainer>
      {data.viewerGigs.map(({id, title, price}) => 
        <PGigItem key={id} title={title} price={price} id={id} />
      )}
      
    </ItemContainer>
  </Container>
  )
}
export default Selling
