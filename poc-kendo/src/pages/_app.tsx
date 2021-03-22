// Import configuration from the theme builder
import '../styles/variables.scss';
import '@progress/kendo-theme-default/dist/all.scss';
import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider, NormalizedCacheObject, createHttpLink, gql } from '@apollo/client';
const httpLink = createHttpLink({ uri: 'http://192.168.101.174:4000/' })

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache,
  connectToDevTools: true,
});


function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
    )
}

export default MyApp
