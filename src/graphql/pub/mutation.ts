import { Pub } from "#root/db/models/pub";
import { Geolocation } from "#root/db/models/geolocation";

const Mutation = {
  createPub: (_: any, args: any, context: any) => {
    console.log(args, context);
    return Pub.create(args, { include: [Geolocation] });
  },
};

export { Mutation };
