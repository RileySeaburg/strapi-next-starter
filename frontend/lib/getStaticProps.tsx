import {ApolloClient, InMemoryCache, gql} from '@apollo/client';



export default async function getStaticProps() {

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    });

    const {data} = await client.query({
        query: gql`
        
        `
    })

    return {
        props: {
            messages: []
        }
    }
}