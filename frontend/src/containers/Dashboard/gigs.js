import React from 'react'
import GigItem from './gigitem'
import { GigDiv, GigsTitle, GigsContainer } from './styles'
import {useQuery} from '@apollo/react-hooks'
import {GET_GIGS } from './queries'

const Gigs = () => {
  const {loading, error, data } = useQuery(GET_GIGS); 
  if (loading) return <h2>Loading</h2>
  if(error) {
        console.log(error); 
        return <h2>error</h2> 
    }

  let gigs = []; 
    let renderB = gigs; 
    
    data.getGigs.forEach((b) => gigs.push(b)); 
    console.log(gigs); 


  return(
  
  <GigDiv>
    <GigsTitle>Shop</GigsTitle>
    <GigsContainer>
    {gigs.map(({id, title, price}, index) => 
                    <GigItem title = {title} price = {price} />
                )}
     

    </GigsContainer>
  </GigDiv>
  )
}

export default Gigs
