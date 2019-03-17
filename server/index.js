const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const nextHandler = app.getRequestHandler();

function createApolloServer() {
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  return new ApolloServer({typeDefs, resolvers});
}

async function main() {
  await nextApp.prepare();

  const server = express();

  // all requests to paths other than `/graphql` are processed by Nextjs
  server.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  const apolloServer = crateApolloServer();
  apolloServer.applyMiddleware({server});

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}

main();
