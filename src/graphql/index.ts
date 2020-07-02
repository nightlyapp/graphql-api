import { GeolocationModule } from "./modules/geolocation";
import { PubModule } from "./modules/pub";
import { GraphQLModule } from "@graphql-modules/core";

export const GraphQlModule = new GraphQLModule({
  imports: [GeolocationModule, PubModule],
});
