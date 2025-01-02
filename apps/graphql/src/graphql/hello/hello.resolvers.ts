import { getHello } from "../../modules/hello/getHello/getHello.ts";

const resolvers = {
  Query: {
    hello: () => getHello(),
  },
};

export default resolvers;
