import { GraphQLModule } from "@graphql-modules/core";
import { PubModule } from "./modules/pub";
import { GeolocationModule } from "./modules/geolocation";
export const GraphQlModule = new GraphQLModule({
  imports: [GeolocationModule, PubModule],
});
