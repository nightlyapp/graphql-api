import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    pub(id: ID!): Pub
    pubs: [Pub!]!
  }

  type Mutation {
    createPub(pub: PubInput!): Pub!
  }

  type Pub {
    id: ID!
    name: String!
    openTime: String!
    closeTime: String!
    geolocation: Geolocation!
  }
  input PubInput {
    name: String!
    openTime: String!
    closeTime: String!
    geolocation: GeolocationInput!
  }
  input GeolocationInput {
    address: String!
    cep: String!
    latitude: Float!
    longitude: Float!
  }
  type Geolocation {
    pub: Pub!
  }
`;

export default typeDefs;
