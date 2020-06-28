"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const Geolocation = apollo_server_1.gql `
  type Geolocation {
    id: ID!
    name: String!
  }
`;
exports.default = Geolocation;
