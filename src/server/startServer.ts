import accessEnv from "@root/helpers/accessEnv";
import * as cors from "cors";
import * as express from "express";
import helmet from "helmet";
import path from "path";
import { pubRouter } from "@root/useCases/pub/pub.routes";

const PORT = accessEnv("PORT", 7000);

const app = express.default();

app.use(express.json());

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

app.use(pubRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.info(`Nightly GraphQL Api listening on ${PORT}`);
});
