const { buildSchema } = require("graphql");
const { importSchema } = require("graphql-import");
const express = require("express");
const graphqlHTTP = require("express-graphql")
const cors = require("cors")

const schema = importSchema("./src/graphql/schema.graphql");
const resolvers = require("./src/graphql/resolvers");

const app = express();

app.use(cors());
app.use("/graphql", graphqlHTTP({
  schema: buildSchema(schema),
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(3600, () => console.log("GraphQL Server Running on Port 3600"));