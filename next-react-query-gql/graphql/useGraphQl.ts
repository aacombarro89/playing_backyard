import { GraphQLClient } from "graphql-request";

export function newGraphqlClient(endpoint = process.env.NEXT_PUBLIC_API_URL) {
  return new GraphQLClient(endpoint || '');
}
