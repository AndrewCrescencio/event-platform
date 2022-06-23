import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p9lqx51ivg01xxg6lb46fd/master',
  cache: new InMemoryCache(),
});
