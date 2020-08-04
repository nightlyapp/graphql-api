import { GeolocationModule } from "./modules/geolocation";
import { PubModule } from "./modules/pub";
import { GraphQLModule } from "@graphql-modules/core";
import { GenderModule } from "./modules/gender";

export const NightlyGraphQlModule = new GraphQLModule({
  imports: [GeolocationModule, PubModule, GenderModule],
});
