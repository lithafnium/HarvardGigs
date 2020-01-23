import styled from 'styled-components';


export const Delete = styled.button`
    display: none;
    width:7vw;
    height:5vh;
    background-color: #900c3f;
    color: white;
    position: absolute;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    font-size: 17px;

`

export const GigItemDiv = styled.div`
    min-width: 8vw;
    height: 80%;
    background-color: white;
    display:flex;
    justify-content:center;
    flex-direction:column;
    border-radius:5%;
    /* border: solid .5px rgba(0, 0, 0, 0.2); */
    padding:20px;
    margin-right: 8px;
    position: relative;
    &:hover{
        cursor:pointer;
        ${Delete} {
            display: block;
            align-self: center;
        }
        background-color: #858585

    }
`
export const GigImg = styled.img`
    width:7vw;
    height:14vh;


`
export const Price = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight:bold;
    font-size:18px;
    margin:5px 5px 5px 0;
`
export const GigText = styled.p`
    margin:1px;
    font-family: 'Roboto', sans-serif;
    font-size:18px;
`
