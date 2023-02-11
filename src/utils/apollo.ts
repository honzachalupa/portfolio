import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apollo = new ApolloClient({
    uri: process.env.HYGRAPH_CONTENT_API_URL,
    cache: new InMemoryCache(),
    ssrMode: true,
    // typeDefs: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cldw3q4vm20nn01rr5du78z95/master",
});
