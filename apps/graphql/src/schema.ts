import path from "path";
import { GraphQLSchema } from "graphql";
import { createSchema } from "graphql-yoga";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./graphql/**/*.graphql")),
);
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./graphql/**/*.resolvers.*")),
);

export const schema: GraphQLSchema = createSchema({
  typeDefs,
  resolvers,
});
