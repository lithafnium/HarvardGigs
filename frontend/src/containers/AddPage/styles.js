import styled from 'styled-components'

export const UploadDiv = styled.div`
    width: 100px:
    height: 400px;
`
export const InnerDiv = styled.div`
    height:50vh;
    margin:${({ right }) => (right ? '0 20% 0 auto' : '0 auto 0 20%')};
    display:flex;
    justify-content:space-around;
    flex-direction:column;
`
export const Button = styled.button`
    padding: 15px 40px 15px 40px; 
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
export const Input = styled.input`
    border:none;
    padding: 16px 8px 16px 8px;
    margin: 0 0 5px 0;
    background-color:lightgray;
    color:darkgray;
    transition: .2s;
    width: 300px;
    border-radius:5px;
    align-self:center;

    &:focus{
        background-color:white;
        color:black;
        outline:none;
    }
`
