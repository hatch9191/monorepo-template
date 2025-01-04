import path from "path";
import { GraphQLSchema } from "graphql";
import { createSchema } from "graphql-yoga";
import { loadFilesSync, loadFiles } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { fileURLToPath } from "url";
import { applyMiddleware } from "graphql-middleware";

import { rules } from "@/modules/permissions";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./graphql/**/*.graphql")),
);

async function loadResolvers() {
  const loadedResolvers = await loadFiles(
    path.join(__dirname, "./graphql/**/*.resolvers.*"),
    { requireMethod: (path: string) => import(path), ignoreIndex: true },
  );

  return mergeResolvers(loadedResolvers);
}

const resolvers = await loadResolvers();

export const rawSchema: GraphQLSchema = createSchema({
  typeDefs,
  resolvers,
});

export const schema = applyMiddleware(rawSchema, rules);
