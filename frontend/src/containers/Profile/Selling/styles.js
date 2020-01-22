import styled from 'styled-components'

export const Container = styled.div`
    width: 1000px;
    height: 450px;
    display: flex;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: right;
    flex-direction: column;
`

export const ItemContainer = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 350px;
    flex-direction: row;
    overflow-x: auto;
    background-color: lightgray;
    padding-top: 20px;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 40px;
`
export const Title = styled.div`
    font-size: 50px;
`