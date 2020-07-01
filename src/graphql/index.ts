import { GraphQLModule } from "@graphql-modules/core";

import { GeolocationModule } from "./modules/geolocation";
import { PubModule } from "./modules/pub";

export const GraphQlModule = new GraphQLModule({
  imports: [GeolocationModule, PubModule],
});
