import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_NAME_PROFILE } from './queries'
import { Container, ProfilePic, Name, Email, AddButton, NavCloseButton, Link } from './styles'


const Bio  = () => {
    const { loading, error, data } = useQuery(GET_NAME_PROFILE, {
        onError: err => console.log(err),
    });

    if (loading) return <h2>Loading</h2>
    if (error) {
        console.log(error);
        return <h2>error</h2>
    }

    return (
        <Container>
            <Link to="/dashboard">
                <NavCloseButton type="button" style={{paddingLeft: "15"}}>&times;</NavCloseButton>
            </Link>
            <ProfilePic />
            <Name>{`${data.viewer.firstName} ${data.viewer.lastName}`}</Name>
            <Email>{`${data.viewer.email}`}</Email>
        </Container>
    )
}
export default Bio
