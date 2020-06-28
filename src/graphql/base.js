"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const Base = apollo_server_1.gql `
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
exports.default = Base;
