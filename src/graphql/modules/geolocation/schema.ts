import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    geolocation(id: ID!): Geolocation
    geolocations: [Geolocation!]!
  }

  type Geolocation {
    id: ID!
    address: String!
    cep: String!
    latitude: Float!
    longitude: Float!
  }
`;

export default typeDefs;
