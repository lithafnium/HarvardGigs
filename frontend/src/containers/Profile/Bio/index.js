import React from 'react'
import { Container, ProfilePic, Name, Email, AddButton } from './styles'


const Bio  = () => (
    <Container>
        <ProfilePic />
        <Name>Natalia Calvo</Name>
        <Email>ncalvo@college.harvard.edu</Email>
        <AddButton> Add item</AddButton>

    </Container>
)
export default Bio
