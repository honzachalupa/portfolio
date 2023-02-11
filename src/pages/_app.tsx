import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css";
import { Context, IContext } from "../utils/context";

export default function App({ Component, pageProps, router }: AppProps) {
    const queryClient = new QueryClient();

    const apolloClient = new ApolloClient({
        uri: process.env.HYGRAPH_CONTENT_API_URL,
        cache: new InMemoryCache(),
    });

    const context: IContext = {};

    return (
        <>
            <GoogleAnalytics />

            <Context.Provider value={context}>
                <ApolloProvider client={apolloClient}>
                    <QueryClientProvider client={queryClient}>
                        <Component {...pageProps} slug={router.asPath} />
                    </QueryClientProvider>
                </ApolloProvider>
            </Context.Provider>
        </>
    );
}
