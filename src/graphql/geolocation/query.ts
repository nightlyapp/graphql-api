import { Geolocation } from "#root/db/models/geolocation";

const Query = {
  geolocation: (_: any, { id }: any, context: any) => {
    return Geolocation.findOne({ where: { id } })
      .then((data) => data)
      .catch((e) => console.log(e));
  },
  geolocations: () => {
    return Geolocation.findAll();
  },
};

export { Query };
