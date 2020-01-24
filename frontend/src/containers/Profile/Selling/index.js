import React from 'react'
import {
  Container, ItemContainer, Title,
} from './styles'
import  PGigItem  from '../ProfileGigItem'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_VIEW_GIGS, DELETE } from './queries'


const Selling = () => {
  const { loading:loading, error:error, data:data } = useQuery(GET_VIEW_GIGS, {
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
  let gigs = [];
  console.log(data);
  console.log('rfjgnerjf;3jq')
  console.log(data.viewerGigs)
  data.viewerGigs.forEach((b) => gigs.push(b));
  console.log(gigs);

return (
  <Container>
    <Title>Currently Selling</Title>
    <ItemContainer>
      {gigs.map(({id, title, price}, index) => 
      <PGigItem title = {title} price= {price} id = {id} />
      
      )}
      
    </ItemContainer>
  </Container>
  )
}
export default Selling
