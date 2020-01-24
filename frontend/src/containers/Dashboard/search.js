/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { SearchDiv, SearchInput, SearchButton } from './styles'
import { Link, useHistory } from 'react-router-dom'



const Search = (props) => {
  //const [searchText, setSearchText] = useState('')

  return (
    <SearchDiv>
      {/* <img style={{ width: '30px', height: '30px', padding: '5px' }} alt="magnifying glass" src="https://cdn4.iconfinder.com/data/icons/political-elections/50/29-512.png" /> */}
      <SearchInputComponent label="Search for a gig..." value={props.searchText} setValue={props.setSearchText} />
      <SearchButton type="button">Search</SearchButton>
      <Link to = "/addpage"><SearchButton type="button">Add Gig</SearchButton></Link>


    </SearchDiv>
  )
}

const SearchInputComponent = ({ label, value, setValue }) => (
  <SearchInput
    placeholder={label}
    value={value}
    onChange={e => setValue(e.target.value)}
  />
)

export default Search
