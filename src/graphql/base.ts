import { gql } from "apollo-server";

const Base = gql`
  type Query {
    dummy: Boolean
  }
  type Mutation {
    dummy: Boolean
  }
  type Meta {
    count: Int
  }
  scalar Url
  scalar Date
`;

export default Base;
