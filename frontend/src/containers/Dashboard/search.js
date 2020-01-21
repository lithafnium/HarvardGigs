/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { SearchDiv, SearchInput, SearchButton } from './styles'

const Search = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <SearchDiv>
      <img style={{ width: '30px', height: '30px', padding: '5px' }} alt="magnifying glass" src="https://cdn4.iconfinder.com/data/icons/political-elections/50/29-512.png" />
      <SearchInputComponent label="Search for a gig..." value={searchText} setValue={setSearchText} />
      <SearchButton type="button">Search</SearchButton>

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
