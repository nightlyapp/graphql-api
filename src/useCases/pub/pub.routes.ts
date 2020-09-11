// const router = require("express").Router();
import { Router } from "express";
import { Request, Response } from "express";
import { createPubController } from "./createPub";

const router = Router();

router.post("/pub", (request: any, response: any) => {
  return createPubController.handle(request, response);
});

export { router as pubRouter };
