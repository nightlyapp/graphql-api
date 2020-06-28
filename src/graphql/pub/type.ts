import { gql } from "apollo-server";
import Geolocation from "../geolocation/type";

const Pub = gql`
  type Pub {
    id: ID!
    name: String!
    geolocation: [Geolocation!]!
  }
`;

export default Pub;
