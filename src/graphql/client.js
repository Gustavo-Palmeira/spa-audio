import { ApolloClient, InMemoryCache } from "@apollo/client"
import { WebSocketLink } from '@apollo/client/link/ws'

export const Client = new ApolloClient({
    link: new WebSocketLink({
        uri: 'wss://assured-seasnail-24.hasura.app/v1/graphql',
        options: {
            reconnect: true,
            connectionParams: {
                headers: { 'x-hasura-admin-secret': 'qMx9krKorGCUtclyOK17mPrBgyf8UnjP0d7aZpcs3SHNASnaA4THYgs8eNU5X6ey' },
            }
        }
    }),
    cache: new InMemoryCache(),
})

// export const Client = new ApolloClient({
//     uri: 'https://assured-seasnail-24.hasura.app/v1/graphql',
//     headers: { 'x-hasura-admin-secret': 'qMx9krKorGCUtclyOK17mPrBgyf8UnjP0d7aZpcs3SHNASnaA4THYgs8eNU5X6ey' },
//     cache: new InMemoryCache(),
// })
