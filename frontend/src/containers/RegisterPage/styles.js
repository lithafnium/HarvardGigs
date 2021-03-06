import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
            
`
export const LoginContainer = styled.div`
	width: 500px;
    height: 500px;
    background-color: #900c3f;
    margin: 100px;
    align-self:center;
    border-radius:5px;
    padding: 20px;
    display:flex;
    flex-direction:column;
`
export const Input = styled.input`
    border:none;
    padding: 10px;
    margin: 0 0 8px 0;
    background-color:lightgrey;
    color:darkgray;
    transition: .2s;
    width: 300px;
    border-radius:5px;
    align-self:center;
    #text::placeholder {
        color: gray;
    }
    &:focus{
        background-color: white;
        color:gray;
        outline:none;
    }
`
export const Title = styled.p`
    font-size:40px;
    align-self:center;
    color:white;
    margin:5px 0 20px 0;
`
export const Font = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;

`


