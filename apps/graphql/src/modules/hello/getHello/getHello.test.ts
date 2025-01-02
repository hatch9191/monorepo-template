import { getHello } from "@/modules/hello/getHello";

describe(getHello.name, () => {
  it("should return hello", () => {
    expect(getHello()).toEqual("Hello");
  });
});
