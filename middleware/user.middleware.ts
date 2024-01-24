import { MiddlewareFn } from "type-graphql";
import { User } from "../model/User";

export const userMiddleware: MiddlewareFn = async ({ context, args }, next) => {
  const { userId, username } = args as User;
  if (!username) {
    throw new Error("파라미터 오류");
  }

  return next();
};
