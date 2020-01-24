import styled from 'styled-components'
import genericProfilePic from './genericProfilePic.jpeg';
import { NavLink } from 'react-router-dom'



export const Container = styled.div`
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #900c3f;
    justify-content: flex-start;
    padding-top: 20px;
    color: white;
`
export const ProfilePic = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%; /*don't forget prefixes*/
    background-image: url(${genericProfilePic});
    background-position: center center;
    /* as mentioned by Vad: */
    background-size: cover;
`


export const Name = styled.div`
    padding-top: 20px;
    height: 50px;
    /*background-color: lightgrey;*/
    display: flex;
    justify-content: center;
    font-size: 50px;

`
export const Email = styled.div`
    padding: 10px;
    width: 200px;
    height: 50px;
    /*background-color: lightgrey;*/
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: white;

`
export const AddButton = styled.button`
    width: 10vw;
    height: 5vh;
    background-color: white;
    color: #900c3f;
    display:flex;
    margin-top: 8px;
    border-radius: 5px;
    &:hover{
        cursor:pointer;
        border-color: #570726;
        border-width: 4px;
        border-radius: 8px;

    }
    justify-content: center;
    align-items: center;
`

export const Link = styled(NavLink)`
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    text-decoration: none;
`

export const NavCloseButton = styled.button`
    border:none;
    background-color:transparent;
    color: white;
    font-size: 2rem; 
    font-weight: bold;
    padding-left: 15px;
    text-decoration: none; 
    &:focus{
        outline: none; 
    }

    &:hover{
        cursor: pointer;
    }
    align-self: flex-start;

`