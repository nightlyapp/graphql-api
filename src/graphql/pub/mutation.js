"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const pub_1 = require("#root/db/models/pub");
const Mutation = {
    createPub: (_, args, context) => {
        console.log(args, context);
        return pub_1.Pub.create(args);
    },
};
exports.Mutation = Mutation;
