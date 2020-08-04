import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    gender(id: ID!): Gender
    genders: [Gender!]!
  }

  type Mutation {
    createGender(name: String!): Gender!
  }

  type Gender {
    id: ID!
    name: String!
  }
`;

export default typeDefs;
