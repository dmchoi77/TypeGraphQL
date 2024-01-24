import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  userId: string;
  @Field()
  username: string;
}
