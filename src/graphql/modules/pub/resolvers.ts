import { Geolocation } from "#root/db/models/geolocation";
import { Pub } from "#root/db/models/pub";
import { PubProvider } from "./pub.provider";

export default {
  Pub: {
    geolocation: (pub: Pub) => {
      return Geolocation.findAll();
    },
  },
  Query: {
    pub: (_: any, { id }: any, { injector }: any) =>
      injector.get(PubProvider).getPubById(id),
    pubs: (_: any, __: any, { injector }: any) =>
      injector.get(PubProvider).getPubs(),
  },
};
