export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
} as const;

export const HTTP_STATUSES = {
  OK: {
    CODE: 200,
    MESSAGE: "OK",
  },
  CREATED: {
    CODE: 201,
    MESSAGE: "Resource Created",
  },
  NO_CONTENT: {
    CODE: 204,
    MESSAGE: "No Content",
  },
  TEMPORARY_REDIRECT: {
    CODE: 307,
    MESSAGE: "Temporary Redirect",
  },
  BAD_REQUEST: {
    CODE: 400,
    MESSAGE: "Bad Request",
  },
  UNAUTHORIZED: {
    CODE: 401,
    MESSAGE: "Not Authorised!",
  },
  FORBIDDEN: {
    CODE: 403,
    MESSAGE: "Forbidden",
  },
  NOT_FOUND: {
    CODE: 404,
    MESSAGE: "Not Found",
  },
  CONFLICT: {
    CODE: 409,
    MESSAGE: "Conflict",
  },
  INTERNAL_SERVER_ERROR: {
    CODE: 500,
    MESSAGE: "Internal Server Error",
  },
  BAD_GATEWAY: {
    CODE: 502,
    MESSAGE: "Bad Gateway",
  },
  SERVICE_UNAVAILABLE: {
    CODE: 503,
    MESSAGE: "Service Unavailable",
  },
  GATEWAY_TIMEOUT: {
    CODE: 504,
    MESSAGE: "Gateway Timeout",
  },
} as const;
