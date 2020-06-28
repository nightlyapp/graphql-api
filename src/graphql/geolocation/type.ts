import { gql } from "apollo-server";

const Geolocation = gql`
  type Geolocation {
    id: ID!
    name: String!
  }
`;

export default Geolocation;
