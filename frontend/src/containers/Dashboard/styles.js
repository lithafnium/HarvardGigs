import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    padding: 50px;
    
`
export const RightContainer = styled.div`
    padding:0;
    margin:0;
    width:100%;
`
export const CategoryList=styled.ul`
    list-style-type:none;
    margin: 0;
    padding: 0;
    width: 100px;
`
export const FilterDiv = styled.div`
    padding-top: 100px;
    align-self:left;
    position: relative;
    left:0px;

`
export const FilterList = styled.ul`
    list-style-type:none;
    margin: 0;
  padding: 0;
  width: 100px;
    
`
export const FilterListItem = styled.li`
    padding: 8px 16px;
    border-bottom: 2px solid black;
    font-family: 'Roboto', sans-serif;
    transition: 0.3s color;

    &:hover{
        color: darkmagenta;
        cursor:pointer;
    }

`
export const FilterHeading = styled.p`

    font-family: 'Roboto', sans-serif;
    font-weight:bold;

`
export const SearchDiv = styled.div`
    display:flex;
    margin-left:100px;
    width:500px;
    height: 40px;
    padding:10px;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius:10px;
`
export const SearchInput = styled.input`
    border: none;
    padding: 10px;
    background-color: #e7e7e7;
    margin-left:10px;
    border-radius: 5px;
    width:100%;
    &:focus{
        outline:none;
    }
`
export const SearchButton = styled.button`
    background-color: #900C3F;
    color: white;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto', sans-serif;
    justify-self:flex-end; /* why doesn't this work :( */
    transition: .3s background-color, .3s color;

    &:hover{
        background-color:white;
        color:black;
        cursor:pointer;
    }

    &:focus{
        outline:none;
    }

`
export const GigDiv = styled.div`
    padding:0 0 0 100px;
`
export const GigsTitle=styled.h1`
    padding:10px 0 10px 0;
    font-family: 'Roboto', sans-serif;
`
export const GigItemDiv = styled.div`
    width: 200px;
    height: 275px;

    display:flex;
    justify-content:center;
    flex-direction:column;
    box-shadow: 3px 3px 2px 0 rgba(0, 0, 0, 0.2);
    border-radius:2px;
    /* border: solid .5px rgba(0, 0, 0, 0.2); */
    padding:20px;

    &:hover{
        cursor:pointer;
    }
`
export const GigImg = styled.img`
    width:175px;
    height:200px;


`
export const Price = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight:bold;
    font-size:18px;
    margin:5px 5px 5px 0;
`
export const GigText = styled.p`
    margin:1px;
    font-family: 'Roboto', sans-serif;
    font-size:18px;
`