import styled from "styled-components"; 
import { NavLink } from 'react-router-dom'

// export const GlobalStyles = createGlobalStyle`
//     @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');  
//     body {
//         font-family: 'Roboto', sans-serif;
//     }
// `




export const Font = styled.div`
     @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');  
     font-family: 'Roboto', sans-serif;
`


export const Link = styled(NavLink)`
	 padding: 30px 30px 30px 30px; 
	 font-size: 1.2rem; 
	 color: #eeeeee;
	 text-decoration: none;
`

export const Nav = styled.div`
    display: flex; 
	flex-wrap: wrap; 
	width: 100%; 
	max-width: 1140px; 
	justify-content: space-between; 
	padding: 0px 100px 0px 100px; 
	align-items: center; 
`

export const NavbarContaier = styled.div`
    display: flex; 
	width: 100%; 
	margin-left: auto; 
	margin-right: auto; 
	justify-content: center;
	position: absolute; 
	top: 0; 
	height: 140px;
`

export const Brand = styled.h1`
    color: #eeeeef; 
`

export const SignupButton = styled.button`
    padding: 15px 40px 15px 40px; 
	border-radius: 5px; 
	border: none; 
	font-weight: bold; 
	font-size: 1.1rem; 
    color: white;
	background-color: #581845; 
	/*border: 2px solid white;*/
    margin-left: 25px; 
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	cursor: pointer;

`
export const Main = styled.div`
    z-index: 10;
    min-height: 90%;
    min-height: 90vh;
    display: flex;
	align-items: center;
	background-color: #900c3f; 
    border-radius: 0 0 50% 50% / 50px;

`

// TAGLINE

export const MainContainer = styled.div`
    display: flex; 
	width: 100%; 
	margin-left: auto; 
	margin-right: auto; 
	justify-content: center;
`

export const HeaderTagline = styled.div`
    display: flex; 
	justify-content: space-between; 
	width: 100%; 
	max-width: 1140px; 
	padding: 0px 100px 0px 100px; 
	margin-top: 60px; 
`

export const Heading = styled.div`
    width: 40%; 
`
export const LearnMore = styled.button`
    padding: 20px 40px 20px 40px; 
	border-radius: 5px; 
	border: none; 
	font-weight: bold; 
	font-size: 1.1rem; 
	color: white; 
	background-color: #581845;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

export const VideoImage = styled.div`
    display: flex; 
	align-items: center; 
	width: 50%; 
`

// About 

export const AboutImage = styled.div`
    display: flex; 
	align-items: center; 
	width: 60%; 
    margin-right: 50px; 
`

export const HomeContainer = styled.div`
    display: flex;
	justify-content: center;  
	width: 100%; 
	background-color: white; 
	padding-top: 150px;
    padding-bottom: 150px;
   
`

export const HomeInner = styled.div`
    display: flex;
	justify-content: space-between;  
	max-width: 1140px; 
	
`

export const Cards = styled.div`
    
    display: flex; 
	justify-content: center; 
`

export const AboutCard = styled.div`
    width: 50%; 
	padding: 20px 40px 20px 40px; 
	margin: 20px; 
	background-color: #FFF; 
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	border-radius: 2px; 
	text-align: center; 
`

export const RaisedAboutCard = styled.div`
    width: 50%; 
	padding: 20px 40px 20px 40px; 
	margin: 20px; 
    transform: translateY(-80px); 
	background-color: #FFF; 
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	border-radius: 2px; 
	text-align: center; 
`

// TEAM 

export const TeamContainer = styled.div`
    display: flex;
	justify-content: center;  
	width: 100%; 
	background-color: white; 
	/* padding-top: 20px; */
`

export const TeamInner = styled.div`
    display: flex; 
    justify-content: center; 
    max-width: 1140px; 
`

export const TeamMember = styled.div`
    width: 20%; 
    margin: 40px 50px 60px 50px; 
    
`

export const PersonImage = styled.div`
    box-shadow:0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    padding-bottom: 5px; 

`

export const Role = styled.div`
    position: absolute; 
    top: -35px;
    right: -20px; 
    padding: 15px; 
    border-radius: 2px; 
    width: 80%; 
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    text-align: center; 
`