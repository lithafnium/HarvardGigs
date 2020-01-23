import React, {useState, useEffect} from 'react'
import GigItem from './gigitem'
import { GigDiv, GigsTitle, GigsContainer } from './styles'
import {useQuery} from '@apollo/react-hooks'
import {GET_GIGS } from './queries'

const Gigs = ({setSearchText, searchText}) => {
  const {loading, error, data } = useQuery(GET_GIGS); 
  const [allGigs, setGigs] = useState([]); 
  
  if (loading){}
  if(error) {
        console.log(error); 
    }

  let gigs = []; 
  let renderG = gigs; 

  
  if(data){
  data.getGigs.forEach((b) => gigs.push(b)); 
  if(allGigs.length === 0 && searchText.length === 0){
    console.log("allGigs")
    renderG = gigs; 
  } else renderG = allGigs; 
  }

  useEffect(() => {
    console.log(searchText); 
    let newList = []; 
    if (searchText !== "") {
      newList = gigs.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = searchText.toLowerCase();
                return lc.includes(filter);
            })
    } else {
        newList = gigs; 
    }
        newList = [...new Set(newList)]
        setGigs(newList); 
  }, [searchText]);

 

  return(
  
  <GigDiv>
    <GigsTitle>Shop</GigsTitle>
    <GigsContainer>
    {renderG.map(({id, title, price, user}, index) => 
                    <GigItem title = {title} price = {price} user = {user} />
                )}
     

    </GigsContainer>
  </GigDiv>
  )
}

export default Gigs
