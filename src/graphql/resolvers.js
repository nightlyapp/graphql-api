"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubQuery = require("./pub/query");
const PubMutation = require("./pub/mutation");
exports.default = Object.assign(Object.assign({}, PubQuery), PubMutation);
