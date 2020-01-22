import React from 'react'
import {
  FilterDiv, FilterList, FilterListItem, FilterHeading, CategoryList,
  CategoryContainer, Checkmark, CategoryItem
} from './styles'

const FilterBar = () => (
  <FilterDiv>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />

    <FilterHeading>CATEGORIES</FilterHeading>
    <CategoryList>
      <li> 
        <CategoryContainer >
          <input type="checkbox" checked="checked"></input>
            <Checkmark ></Checkmark>
            <CategoryItem>Academic</CategoryItem>
        </CategoryContainer>
      </li>
      <li>
      <CategoryContainer >
          <input type="checkbox" checked="checked"></input>
            <Checkmark ></Checkmark>
            <CategoryItem>Social</CategoryItem>
        </CategoryContainer>


      </li>
    </CategoryList>
    <hr style = {{border: "1.5px solid",
                            borderColor:"#900C3F",
                            width: "200px"}}/>
    <FilterHeading>FILTER</FilterHeading>
    <FilterList>
    <li> 
        <CategoryContainer >
          <input type="checkbox" checked="checked"></input>
            <Checkmark ></Checkmark>
            <CategoryItem>Price</CategoryItem>
        </CategoryContainer>
      </li>
      <li>
      <CategoryContainer >
          <input type="checkbox" checked="checked"></input>
            <Checkmark ></Checkmark>
            <CategoryItem>User</CategoryItem>
        </CategoryContainer>


      </li>
    </FilterList>
  </FilterDiv>
)


export default FilterBar
