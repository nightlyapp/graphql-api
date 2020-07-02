import { GraphQLModule } from "@graphql-modules/core";

import { GeolocationProvider } from "./geolocation.provider";
import resolvers from "./resolvers";
import typeDefs from "./schema";

export const GeolocationModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [GeolocationProvider],
});
