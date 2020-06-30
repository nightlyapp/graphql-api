import { gql } from "apollo-server";
import Pub from "./pub/type";
import Base from "./base";
import Geolocation from "./geolocation/type";

const typeDefs = [Base, Geolocation, Pub];

export default typeDefs;
