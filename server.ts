import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolver/user";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

bootstrap();
