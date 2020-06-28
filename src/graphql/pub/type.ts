import { gql } from "apollo-server";
import Geolocation from "../geolocation/type";

const Pub = gql`
  extend type Query {
    pub(id: ID!): Pub
    pubs: [Pub!]!
  }

  extend type Mutation {
    createPub(name: String!): Pub
  }

  type Pub {
    id: ID!
    name: String!
    geolocation: [Geolocation!]!
  }
`;

export default Pub;
