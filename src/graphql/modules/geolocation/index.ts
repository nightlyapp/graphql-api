import { GraphQLModule } from "@graphql-modules/core";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { GeolocationProvider } from "./geolocation.provider";

export const GeolocationModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [GeolocationProvider],
});
