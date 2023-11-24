import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphSchema.ts"
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import mongoose from "mongoose";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  //Deno.exit(1);
}

//await mongoose.connect(MONGO_URL);

//nuevo servidor en Deno Deploy

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

const {url} = await startStandaloneServer(server);

console.log(`Server ready at ${url}`);