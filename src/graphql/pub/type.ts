import { gql } from "apollo-server";
import Geolocation from "../geolocation/type";

const PubConst = gql`
  extend type Query {
    pub(id: ID!): Pub
    pubs: [Pub!]!
  }

  extend type Mutation {
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
`;

export default PubConst;
