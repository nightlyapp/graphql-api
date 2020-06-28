"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const cors = require("cors");
const express = require("express");
const resolvers_1 = require("#root/graphql/resolvers");
const typeDefs_1 = require("#root/graphql/typeDefs");
const accessEnv_1 = require("#root/helpers/accessEnv");
const PORT = accessEnv_1.default("PORT", 7000);
const apolloServer = new apollo_server_express_1.ApolloServer({ resolvers: resolvers_1.default, typeDefs: typeDefs_1.default });
const app = express();
app.use(cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
        "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
}));
apolloServer.applyMiddleware({ app, path: "/graphql" });
app.listen(PORT, "0.0.0.0", () => {
    console.info(`Nightly GraphQL Api listening on ${PORT}`);
});
