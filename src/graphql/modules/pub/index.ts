import { GraphQLModule } from "@graphql-modules/core";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { PubProvider } from "./pub.provider";

export const PubModule = new GraphQLModule({
  typeDefs: [typeDefs],
  resolvers: { resolvers },
  providers: [PubProvider],
});
