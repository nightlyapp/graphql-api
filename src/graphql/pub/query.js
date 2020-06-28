"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.Pub = void 0;
const pub_1 = require("#root/db/models/pub");
const geolocation_1 = require("#root/db/models/geolocation");
const Pub = {
    geolocation: (pub) => {
        return geolocation_1.Geolocation.findAll({
            include: [
                {
                    model: pub_1.Pub,
                    where: { id: pub.id },
                },
            ],
            order: [["name", "ASC"]],
        });
    },
};
exports.Pub = Pub;
const Query = {
    pub: (_, { id }, context) => {
        return pub_1.Pub.findOne({ where: { id } })
            .then((data) => data)
            .catch((e) => console.log(e));
    },
    pubs: () => {
        return pub_1.Pub.findAll();
    },
};
exports.Query = Query;
