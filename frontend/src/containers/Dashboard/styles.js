import styled from 'styled-components';
import Trump from '../trump.jpg';
import { NavLink } from 'react-router-dom'

export const Font = styled.div`
     @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');  
     font-family: 'Roboto', sans-serif;
`


export const NavBar = styled.div`
    background-color: #900c3f; 
    width: 100vw; 
    display: flex; 
    padding-left: 50px;
    padding: 10px 50px 10px 50px;  
    align-items: center; 
    
`

export const Container = styled.div`
    max-width: 1200px; 
    display:flex;
    padding: 50px;
    
`
export const RightContainer = styled.div`
    padding:0;
    margin:0;
    width:100%;
    display: flex; 
`
export const CategoryList=styled.ul`
    list-style-type:none;
    margin: 0;
    padding: 0;
    width: 200px;
    margin-bottom: 30px; 
`
export const FilterDiv = styled.div`
    /* padding-top: 100px; */
    /* align-self:left; */
    position: relative;
    left:0px;

`
export const FilterList = styled.ul`
    list-style-type:none;
    margin: 0;
  padding: 0;
  width: 200px;
    
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

export const CategoryContainer = styled.label`
  position: relative;

    display: flex; 
    align-items: center;    
    margin-bottom: 20px;    
`

export const Checkmark = styled.label`
    position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 2px;
  margin-right: 10px; 
  transition: 0.2s;

  &:hover{
        background-color:#ddd   ;
        color:black;
        cursor:pointer;
    }


`

export const CategoryItem = styled.span`
    margin-left: 15px; 
    font-size: 1.1rem; 
`

export const SearchDiv = styled.div`
    display:flex;
    margin-left:80px;
    margin-right: 40px;
    max-width: 800px;
    width: 100%; 
    height: 40px;
    padding:10px;
    /* box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1); */
    border-radius:2px;
`
export const SearchInput = styled.input`
    border: none;
    padding: 10px;
    background-color: #fff;
    margin-left:10px;
    border-radius: 3px;
    width:100%;
    &:focus{
        outline:none;
    }
`
export const SearchButton = styled.button`
    background-color: #900C3F;
    color: white;
    margin-left: 10px;
    border-radius: 3px;
    width: 100px; 
    padding: 10px 20px 10px 20px; 
    border: 1px solid white;
    font-family: 'Roboto', sans-serif;
    justify-self:flex-end; /* why doesn't this work :( */
    transition: .3s background-color, .3s color;

    &:hover{
        background-color:white;
        border: 1px solid #900C3F; 
        color: #900C3F;
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
    margin: 0px; 
    margin-bottom: 20px; 
    padding:10px 0 10px 0;
    font-family: 'Roboto', sans-serif;
`
export const GigItemDiv = styled.div`
    width: 200px;
    height: 275px;
    margin-right: 40px; 
    margin-bottom: 40px;

    display:flex;
    justify-content:center;
    flex-direction:column;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);    
    border-radius:2px;
    /* border: solid .5px rgba(0, 0, 0, 0.2); */
    padding:20px;

    &:hover{
        cursor:pointer;
    }
`

export const GigsContainer = styled.div`
    display: flex; 
    flex-wrap: wrap; 
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
    margin:2px;
    font-family: 'Roboto', sans-serif;
    font-size:18px;
`

export const ProfilePic = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%; /*don't forget prefixes*/
    background-image: url(${Trump});
    background-position: center center;
    /* as mentioned by Vad: */
    background-size: cover;
    display: flex;
    justify-self: flex-end;
`
export const NavbarLink = styled(NavLink)`
	 padding: 30px 30px 30px 30px; 
	 font-size: 1.2rem; 
	 color: #eeeeee;
	 text-decoration: none;
     display:flex;
     justify-content: center;
     align-content: center;
`
export const SignupButton = styled.button`
    padding: 10px 20px 10px 20px; 
	border-radius: 5px; 
	border: none; 
	font-weight: bold; 
	font-size: 1.1rem; 
    color: white;
	background-color: #581845; 
	/*border: 2px solid white;*/
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	cursor: pointer;


`