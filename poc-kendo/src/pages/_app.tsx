// Import configuration from the theme builder
import '../styles/variables.scss';
import '@progress/kendo-theme-default/dist/all.scss';
import '../styles/sunnet-mvp.css';
import '../styles/globals.scss';
import { ApolloClient, InMemoryCache, ApolloProvider, NormalizedCacheObject, createHttpLink, gql } from '@apollo/client';
const httpLink = createHttpLink({ uri: 'http://192.168.101.174:4000/' })

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache,
  // uri: "http://localhost:5000/graphql",
  // uri: "http://192.168.101.174:4000/",
  connectToDevTools: true,
});
client
  .query({
    query: gql`
    query{
      listPerson{
          personId, 
          empId,
          firstName,
          lastName,
          workPhone,
          homePhone,
          cellPhone
      }
  }
    `
  })
  .then(result => console.log("res--",result));


function MyApp({ Component, pageProps }) {
  return(
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
    )
}

export default MyApp
