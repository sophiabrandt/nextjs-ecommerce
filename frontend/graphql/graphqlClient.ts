import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  <string>process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000/api/graphql"
);
