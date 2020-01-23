import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation login($email: String!, $password:String!) {
        login(email:$email, password:$password) {
            token
            user {
                id
                email
            }
        }
    }
`
export const TESTQUERY = gql`
query searchGigsPrice($input:RangeInput!) {
  searchGigsPrice(input: $input) {
    price
    title
  }
}
`
//export default LOGIN