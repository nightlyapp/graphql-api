import { GraphQLModule } from "@graphql-modules/core";

import { GenderProvider } from "./gender.provider";
import resolvers from "./resolvers";
import typeDefs from "./schema";

export const GenderModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [GenderProvider],
});
