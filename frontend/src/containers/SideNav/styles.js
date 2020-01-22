import styled from 'styled-components'

export const SideNavContainer = styled.div`
    height:100vh;
    width: ${({ navOpen }) => (navOpen ? '250px' : '0px')}; 
    background-color:#2b2b2b;
    z-index:1;
    overflow-x: hidden;
    transition: 0.5s;
    position:fixed;
    padding:0;
    margin:0;
`
export const NavList = styled.ul`
    list-style-type:none;
   margin: 0;
  padding: 0;
  width: 100px;
    
`
export const NavListItem = styled.li`
    padding: 16px 16px;
    font-family: 'Roboto', sans-serif;
    transition: 0.3s color;
    color:white;
    text-decoration:none;

    a:hover{
        cursor:pointer;
        color:lightgrey;
    }
    a:visited{
        color:white;
        text-decoration:none;
    }

`
export const NavCloseButton = styled.button`
    border:none;
    background-color:white;
`
export const NavOpenButton = styled.button`
    border:none;
    background-color:white;
    /* position:fixed;
    z-index:3; */
    width:20px;
    height:20px;
    margin: 10px 0 0 10px;
`
