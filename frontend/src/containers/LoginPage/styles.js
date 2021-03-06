import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
	 padding: 30px 30px 30px 30px; 
	 font-size: 1.2rem; 
	 color: #eeeeee;
	 text-decoration: none;
`
export const Container = styled.div`
    min-height: 100%;
    min-height: 100vh;
    width: 100%; 
    display: flex;
    justify-content: center; 
    background-color: #900c3f;
            
`

export const PictureContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    width: 50%; 

    /* padding: 100px;  */

    & img{
        width: 60%; 
        height: auto; 
    }
`
export const LoginContainer = styled.div`
    width: 50%; 
	/* width: 500px; */
    /* background-color: #900c3f; */
    /* align-self:center;
    border-radius:5px;
    padding: 20px; */
    align-items: center; 
    justify-content: center; 
    display:flex;
    background-color: white; 
    
`
export const InnerLogin = styled.div`

    display: flex; 
    flex-direction:column;
    justify-content: center; 
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 50px; 
    border-radius: 5px; 

`

export const Input = styled.input`
    border:none;
    padding: 8px;
    margin: 0 0 20px 0;
    background-color:white;
    border: none; 
    border-bottom: 2px solid #900c3f; 
    font-size: 1.1rem;
    color:darkgray;
    transition: .2s;
    width: 300px;
    align-self:center;

    &:focus{
        background-color:white;
        color:black;
        outline:none;
    }
`
export const Title = styled.p`
    font-size:1.8rem;
    font-weight: 600;
    align-self:center;
    color: black; 
    margin-bottom: 40px; 
    margin-top: 0px; 
`
export const Font = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;

`
