import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const apiKey = process.env.CONTENTFUL_API_KEY;

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/qw7zjbw1afhw/environments/master',
  headers: {
    Authorization: 'Bearer ' + apiKey,
  },
  cache: new InMemoryCache(),
});

export default client;
