import { GraphQLServer } from 'graphql-yoga'
import { createConnection } from "typeorm";
import Query from './src/resolvers/query';
import Mutation from './src/resolvers/mutation';
import * as connectionOptions from "./ormConfig";

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation
    },
    context: req => {
      const { connection: { context = null } = {} } = req;
      return {
        req: req.request,
        context
      };
    }
})

createConnection(connectionOptions)
  .then(() => {
    server.start({ port: process.env.PORT || 4000 }, () => {
      console.log('The server is up!')
    });
  });
