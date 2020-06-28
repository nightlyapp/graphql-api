import { gql } from "apollo-server";
import Pub from "./pub/type";
import Geolocation from "./geolocation/type";

const typeDefs = [
  gql`
    type Query {
      pubs: [Pub!]!
    }
  `,
  Pub,
  Geolocation,
];

export default typeDefs;
