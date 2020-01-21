import React from 'react'
import FilterBar from './filterbar'
import Search from './search'
import Gigs from './gigs'
import {Container, RightContainer} from './styles'

const Dashboard = () => 
<Container>
    <FilterBar></FilterBar>
    <RightContainer>
        <Search></Search>
        <Gigs></Gigs>
    </RightContainer>

</Container>


export default Dashboard
