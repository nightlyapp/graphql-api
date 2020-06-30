import { Pub } from "#root/db/models/pub";
import { Geolocation } from "#root/db/models/geolocation";
import { values } from "sequelize/types/lib/operators";

const Mutation = {
  createPub: (_: any, data: any, context: any) => {
    const pub: Pub = data.pub;
    return Pub.create(pub, { include: [Geolocation] });
  },
};

export { Mutation };
