import { GraphQLModule } from "@graphql-modules/core";

import { PubProvider } from "./pub.provider";
import resolvers from "./resolvers";
import typeDefs from "./schema";

export const PubModule = new GraphQLModule({
  typeDefs,
  resolvers,
  providers: [PubProvider],
});
