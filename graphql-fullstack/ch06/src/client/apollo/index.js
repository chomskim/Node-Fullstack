import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const AuthLink = (operation, next) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    operation.setContext(context => ({
      ...context,
      headers: {
        ...context.headers,
        Authorization: `Bearer ${token}`,
      },
    }));
  }
  return next(operation);
};

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path, extensions }) => {
          if (extensions.code === 'UNAUTHENTICATED') {
            localStorage.removeItem('jwt');
            client.resetStore()
          }
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }
    }),
    AuthLink,
    new HttpLink({
      uri: 'http://localhost:8000/graphql',
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;