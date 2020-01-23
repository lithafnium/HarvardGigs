import styled from 'styled-components'

export const SideNavContainer = styled.div`
    top: 0; 
    left: 0; 
    height:100vh;
    width: ${({ navOpen }) => (navOpen ? '350px' : '0px')}; 
    background-color:#fff;
    z-index:1;
    overflow-x: hidden;
    transition: 0.5s;
    position:fixed;
   
    
    margin:0;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);    

`
export const NavList = styled.ul`
    list-style-type:none;
   margin: 30px;
  padding: 0;
  width: 100%;
    
`

export const NavHeader = styled.div`
    padding: 30px 30px 0px 30px; 
    display: flex; 
    align-items: center; 
    width: 100%; 
`
export const NavListItem = styled.li`
    margin-left: -30px; 
    padding: 16px 0px 16px 30px;
    font-size: 1.2rem; 
    font-family: 'Roboto', sans-serif;
    transition: 0.3s color;
    color:black;
    text-decoration:none;
    
    border-radius: 3px; 
    width: 100%; 
    transition: 0.2s; 
    
    &:hover{
        cursor: pointer; 
        background-color: #eee; 
    }
    a:hover{
        cursor:pointer;
        color:lightgrey;
    }
    a:visited{
        color:black;
        text-decoration:none;
    }

`
export const NavCloseButton = styled.button`
    border:none;
    background-color:white;
    font-size: 2rem; 
    font-weight: bold; 
    margin: 50px 0px 0px 20px; 

    &:focus{
        outline: none; 
    }

    &:hover{
        cursor: pointer;
    }
    

`
export const NavOpenButton = styled.button`
    font-size: 2rem; 
    border:none;
    background-color:#900c3f;
    /* position:fixed;
    z-index:3; */
    width:35px;
    height:35px;
    margin-right: 50px;  

    &:focus{
        outline: none; 
    }

    &:hover{
        cursor: pointer;
    }
    
    &:focus{
        outline:none;
        
    }
    &:hover{
        cursor:pointer;
    }
`

export const Bar = styled.p`
    /* width: 30px; */
  	height: 3.5px;
      border-radius: 5px; 
  	background-color: #fff;
  	margin: 5px 0;
  	transition: 0.3s;


`
