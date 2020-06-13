import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import JWT from 'jsonwebtoken';
import Resolvers from './resolvers';
import Schema from './schema';
import auth from './auth';

//const { JWT_SECRET } = process.env;
const JWT_SECRET = 'awv4BcIzsRysXkhoSAb8t8lNENgXSqBruVlLwd45kGdYjeJHLap9LUJ1t9DTdw36DvLcWs3qEkPyCY6vOyNljlh2Er952h2gDzYwG82rs1qfTzdVIg89KTaQ4SWI1YGY'

export default (utils) => {
  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(utils),
    schemaDirectives: {
      auth: auth
    },
  });

  const server = new ApolloServer({
    schema: executableSchema,
    context: async ({ req }) => {
      const authorization = req.headers.authorization;
      if (typeof authorization !== typeof undefined) {
        var search = "Bearer";
        var regEx = new RegExp(search, "ig");
        const token = authorization.replace(regEx, '').trim();
        return JWT.verify(token, JWT_SECRET, (err, result) => {
          if (err) {
            return req;
          } else {
            return utils.db.models.User.findById(result.id).then((user) => {
              return Object.assign({}, req, { user });
            });
          }
        });
      } else {
        return req;
      }
    },
  });

  return server;
};
