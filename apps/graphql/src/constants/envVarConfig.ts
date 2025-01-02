import { ensureString } from "@repo/utils/string";

export const envVarConfig = {
  postgresDbUrl: ensureString("POSTGRES_DB_URL", process.env.POSTGRES_DB_URL),
  jwtSecret: ensureString("JWT_SECRET", process.env.JWT_SECRET),
};
