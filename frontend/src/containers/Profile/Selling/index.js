import React from 'react'
import {
  Container, ItemContainer, Title,
} from './styles'
import  PGigItem  from '../ProfileGigItem'
import { useQuery } from '@apollo/react-hooks'
import { GET_VIEW_GIGS } from './queries'


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
          Either something went wrong (probably) or you havent put anything up for sale (also likely)
        </ItemContainer>
      </Container>
    )

  }
  let gigs = [];
  console.log(data);
  console.log('rfjgnerjf;3jq')
  console.log(data.viewerGigs)
  //data.viewerGigs.forEach((b) => gigs.push(b));
  console.log(gigs);

return (
  <Container>
    <Title>Currently Selling</Title>
    <ItemContainer>
      {gigs.map(({id, title, price}, index) => 
      <PGigItem title = {title} price= {price} />
      
      )}
      
    </ItemContainer>
  </Container>
  )
}
export default Selling
