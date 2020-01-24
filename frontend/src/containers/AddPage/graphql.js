import gql from 'graphql-tag'

const ADD_GIG = gql`
    mutation addGig($input:AddGigInput!){
  addGig(input:$input){
    id
    title
    photo
    price
	  topic
    userId
  }
}
`
export default ADD_GIG
