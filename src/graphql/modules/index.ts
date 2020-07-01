import { GraphQLModule } from "@graphql-modules/core";
import { PubModule } from "./pub";

export const GraphQlModule = new GraphQLModule({
  imports: [PubModule],
});
