import { Pub as Pubs } from "#root/db/models/pub";
import { Geolocation } from "#root/db/models/geolocation";

const Pub = {
  geolocation: (pub: Pubs) => {
    return Geolocation.findAll();
  },
};
const Query = {
  pub: (_: any, { id }: any, context: any) => {
    return Pubs.findOne({ where: { id }, include: [Geolocation] })
      .then((data) => data)
      .catch((e) => console.log(e));
  },
  pubs: () => {
    return Pubs.findAll({
      include: [Geolocation],
    });
  },
};

export { Pub, Query };
