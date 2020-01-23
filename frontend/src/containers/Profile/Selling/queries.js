import gql from 'graphql-tag'

export const GET_VIEW_GIGS = gql`
    query {
            viewerGigs {
                id
                userId
                title
                photo
                price
                createdAt
            }
        }

`