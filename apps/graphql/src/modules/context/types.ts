import { PrismaClient, User } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql";
import { YogaInitialContext } from "graphql-yoga";

export type InitialContext = GraphQLResolveInfo & YogaInitialContext;

export type ContextUser = Pick<User, "id" | "email" | "role"> & {
  accessToken: string;
};

export type Context = InitialContext & {
  prisma: PrismaClient;
  user: ContextUser | null;
};
