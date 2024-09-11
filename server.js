const express = require("express");
// apollo and graphql tools work well together
const { ApolloServer } = require("apollo-server-express");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync("**/*", { extensions: ["graphql"] });
const resolversArray = loadFilesSync("**/*", { extensions: ["resolvers.js"] });

async function startApolloServer() {
  const app = express();
  //   this schema defines how our apollo server instance connects
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema,
  });
  await server.start();
  //   basically calling app.use() on the middleware that is created inside our apollo server
  server.applyMiddleware({ app });
  app.listen(3030, () => {
    console.log("Running on port 3030 | graphql server");
  });
}

startApolloServer();
