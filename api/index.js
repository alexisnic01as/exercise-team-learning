const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const mongoose = require("mongoose");
import { resolvers } from './resolvers.js';
import { typeDefs } from './typeDefs';

const app = express();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
  });

  server.start().then((res) => {
    server.applyMiddleware({ app });
    
    // const url =
    //   "mongodb+srv://tigerking:wphPpplcHRwNdv29@riceapps2020-21-ppsrv.gcp.mongodb.net/osa_2022?retryWrites=true&w=majority";
    // mongoose.connect(url);
    // mongoose.connection.on("connected", function () {
    //   console.log("Mongoose connected");
    //   // console.log("Mongoose connected to " + url);
    // });

    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  });