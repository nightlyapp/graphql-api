import * as PubQuery from "./pub/query";
import * as PubMutation from "./pub/mutation";
import * as GeolocationQuery from "./geolocation/query";

export default {
  ...GeolocationQuery,
  ...PubQuery,
  ...PubMutation,
};
