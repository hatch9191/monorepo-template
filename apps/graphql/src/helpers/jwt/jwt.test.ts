import { decodeJwtToken } from "./jwt.ts";

it("decode this", () => {
  const result = decodeJwtToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2ZhNWQ2LTNmM2ItNDVmMS04N2Y2LTRhNDAyYzU3OGU3YSIsImVtYWlsIjoibmV3LXVzZXJAZml0LWNoZWNrLmNvbSIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsInByb2ZpbGVOYW1lIjpudWxsLCJiaW8iOm51bGwsInByb2ZpbGVJbWFnZUlkIjpudWxsLCJjcmVhdGVkQXQiOiIyMDI0LTA3LTE2VDA4OjM3OjQ4LjU2NloiLCJ1cGRhdGVkQXQiOiIyMDI0LTA3LTE2VDA4OjM3OjQ4LjU2NloiLCJ1c2VyUm9sZXMiOltdLCJpYXQiOjE3MjExMTkwNjgsImV4cCI6MTcyMTcyMzg2OH0.oo9ZKKLjqq6jpKL58gHZm4caJj744j3Wi2fG-PvXhl4"
  );
  console.log(result);
});
