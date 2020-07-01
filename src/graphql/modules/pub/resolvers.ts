import { Geolocation } from "#root/db/models/geolocation";
import { Pub } from "#root/db/models/pub";
import { PubProvider } from "./pub.provider";

export default {
  Query: {
    pub: (_: any, { id }: any, { injector }: any) =>
      injector.get(PubProvider).getPubById(id),
    pubs: (_: any, __: any, { injector }: any) =>
      injector.get(PubProvider).getPubs(),
  },
  Mutation: {
    createPub: (_any: any, { pub }: any, { injector }: any) =>
      injector.get(PubProvider).createPub(pub),
  },
};
