import { gql } from "apollo-server";

const typeDefs = gql`
  type Pub {
    id: ID!
    name: String!
    geolocation: [Geolocation!]!
  }
  type Geolocation {
    id: ID!
    pubId: ID!
    name: String!
  }

  type Query {
    pubs: [Pub!]!
  }
`;

export default typeDefs;
