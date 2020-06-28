import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import * as express from "express";
import path from "path";

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 7000);

const apolloServer = new ApolloServer({ resolvers, typeDefs });

const app = express.default();

app.use("/", express.static(path.join(__dirname, "../../website")));

app.use("*", function (req, res, next) {
  if (req.headers["x-forwarded-proto"] == "http")
    res.redirect(`https://${req.hostname}${req.url}`);
  else next();
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.redirect(`https://${req.hostname}`);
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

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
