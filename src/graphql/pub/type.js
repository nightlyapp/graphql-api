"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const Pub = apollo_server_1.gql `
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
exports.default = Pub;
