import { sign, verify } from "jsonwebtoken";

export function signJwtToken(payload: any, secret: string): string {
  return sign(payload, secret, { expiresIn: "21d" });
}

export function decodeJwtToken<T>(
  secret: string,
  token?: string | null,
): T | null {
  try {
    if (!token) {
      return null;
    }

    const payload = verify(token, secret);

    return payload as T;
  } catch (error) {
    if (error instanceof Error && error.name !== "TokenExpiredError") {
      throw error;
    }

    return null;
  }
}
