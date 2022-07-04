import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import JWT from 'jsonwebtoken';
import Resolvers from './resolvers';
import Schema from './schema';
import auth from './auth';

require('dotenv').config();

const { JWT_SECRET } = process.env;

export default (utils) => {
  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(utils),
    schemaDirectives: { auth: auth },
  });

  const server = new ApolloServer({
    schema: executableSchema,
    context: async ({ req }) => {
      const authorization = req.headers.authorization;
      if (typeof authorization !== typeof undefined) {
        const search = 'Bearer';
        const regEx = new RegExp(search, 'ig');
        const token = authorization.replace(regEx, '').trim();
        return JWT.verify(token, JWT_SECRET, (err, result) => {
          if (err) {
            return req;
          } else {
            return utils.db.models.User.findById(result.id)
              .then((user) => Object.assign({}, req, { user }));
          }
        });
      } else {
        return req;
      }
    },
  });

  return server;
};
