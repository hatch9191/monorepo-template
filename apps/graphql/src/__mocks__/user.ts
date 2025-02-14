import { User, UserRole } from "@prisma/client";

import { ContextUser } from "@/context/types.ts";

export const user: User = {
  id: "cff67367-4aeb-4509-bc72-88ac4a9f211e",
  firstName: "Mock",
  lastName: "User",
  email: "mock.user@email.com",
  role: UserRole.ADMIN,
  createdAt: new Date("2024-12-03"),
  updatedAt: new Date("2024-12-03"),
};

export const contextUser: ContextUser = {
  id: user.id,
  email: user.email,
  role: user.role,
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6ImhhcnJ5LmV2YW5zQHRvZ2F0aGVyLmNvbSIsInJvbGUiOiJBRE1JTiIsImFjY2Vzc1Rva2VuIjoiMTIzNDUiLCJpYXQiOjE3MzU4Mjk1MTIsImV4cCI6MTczNzY0MzkxMn0.KEKxudMYwaqK3jzbBR34uVOBZLtLPxI7ka1ETdSudXM",
};
