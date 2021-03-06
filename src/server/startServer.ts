import accessEnv from "@root/helpers/accessEnv";
import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";
import helmet from "helmet";
import path from "path";
import { GraphQLModule } from "@graphql-modules/core";
import { NightlyGraphQlModule } from "@root/graphql";

const PORT = accessEnv("PORT", 7000);

const mainGraphQLModule = new GraphQLModule({
  imports: [NightlyGraphQlModule],
});

const apolloServer = new ApolloServer({
  schema: mainGraphQLModule.schema,
  context: (session) => session,
});
const app = express.default();

app.use("/", express.static(path.join(__dirname, "../../../website")));
app.use(helmet());

app.use(
  cors.default({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
  })
);

apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(PORT, "0.0.0.0", () => {
  console.info(`Nightly GraphQL Api listening on ${PORT}`);
});
