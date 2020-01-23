import React, {useState} from 'react'
import FilterBar from './filterbar'
import Search from './search'
import Gigs from './gigs'
import { Container, RightContainer, navOpenButton, Font, NavBar } from './styles'
import SideNavDiv from './sidenavdiv'


const Dashboard = () => {

    const [searchText, setSearchText] = useState('')

    return(
    
    <Font>
      <NavBar >
        <SideNavDiv />
        <h1 style = {{color: "#fff"}}>YardSale</h1>
        <Search setSearchText = {setSearchText} searchText = {searchText}/>
      </NavBar>

      <Container>

        <RightContainer>
          <FilterBar />
            <Gigs searchText = {searchText} />
        </RightContainer>

      </Container>
    </Font>
  )
}


export default Dashboard
