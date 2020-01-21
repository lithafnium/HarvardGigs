import styled from 'styled-components'
import genericProfilePic from './genericProfilePic.jpeg';



export const Container = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ProfilePic = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%; /*don't forget prefixes*/
    background-image: url(${genericProfilePic});
    background-position: center center;
    /* as mentioned by Vad: */
    background-size: cover;
`


export const Name = styled.div`
    padding-top: 20px;
    width: 200px;
    height: 50px;
    /*background-color: lightgrey;*/
    display: flex;
    justify-content: center;
    font-size: 25px;

`
export const Email = styled.div`
    padding: 5px;
    width: 200px;
    height: 50px;
    /*background-color: lightgrey;*/
    display: flex;
    justify-content: center;
    font-size: 15px;

`

