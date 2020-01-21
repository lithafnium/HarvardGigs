import styled from 'styled-components'

export const Container = styled.div`
    width: 1000px;
    height: 300px;
    display: flex;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: right;
    flex-direction: column
`
export const Card = styled.div`
    background-color: darkblue;
    min-width: 200px;
    margin: 5px;
    height: 200px;
`

export const ItemContainer = styled.div`
    display: flex;
    min-width: 100%;
    min-height: 200px;
    flex-direction: row;
    overflow-x: auto;
`
export const Title = styled.div`
    font-weight: bold;
    font-size: 50px;
`
