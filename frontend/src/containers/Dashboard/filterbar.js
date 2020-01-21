import React from 'react'
import {
  FilterDiv, FilterList, FilterListItem, FilterHeading, CategoryList,
} from './styles'

const FilterBar = () => (
  <FilterDiv>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />

    <FilterHeading>CATEGORIES</FilterHeading>
    <CategoryList>
      <li>Academic</li>
      <li>Social</li>
    </CategoryList>
    <FilterHeading>FILTER</FilterHeading>
    <FilterList>
      <FilterListItem>Price</FilterListItem>
      <FilterListItem>User</FilterListItem>
    </FilterList>
  </FilterDiv>
)


export default FilterBar
