import styled from 'styled-components'
import genericProfilePic from './genericProfilePic.jpeg';



export const Container = styled.div`
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #900c3f;
    justify-content: flex-start;
    padding-top: 40px;
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

`
export const AddButton = styled.button`
    width: 125px;
    height: 60px;
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

