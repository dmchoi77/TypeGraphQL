import { Resolver, UseMiddleware, Query, Arg } from "type-graphql";
import { userMiddleware } from "../middleware/user.middleware";
import { User } from "../model/User";

@Resolver()
export class UserResolver {
  @UseMiddleware(userMiddleware)
  @Query(() => User)
  users(
    @Arg("userId") userId: string,
    @Arg("username") username: string
  ): User {
    return { userId, username };
  }
}
