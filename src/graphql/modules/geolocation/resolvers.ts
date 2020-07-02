import { GeolocationProvider } from "./geolocation.provider";

export default {
  Query: {
    geolocation: (_: any, { id }: any, { injector }: any) =>
      injector.get(GeolocationProvider).getGeolocationById(id),
    geolocations: (_: any, __: any, { injector }: any) =>
      injector.get(GeolocationProvider).getGeolocations(),
  },
};
