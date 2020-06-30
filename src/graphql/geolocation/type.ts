import { gql } from "apollo-server";

const Geolocation = gql`
  extend type Query {
    geolocation(id: ID!): Geolocation
    geolocations: [Geolocation!]!
  }

  type Geolocation {
    id: ID
    address: String
    cep: String
    latitude: Float
    longitude: Float
  }
`;

export default Geolocation;
