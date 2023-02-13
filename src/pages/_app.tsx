import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css";

const App = ({ Component, pageProps, router }: AppProps) => {
    const queryClient = new QueryClient();

    const apolloClient = new ApolloClient({
        uri: process.env.HYGRAPH_CONTENT_API_URL,
        cache: new InMemoryCache(),
    });

    return (
        <>
            <GoogleAnalytics />

            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} slug={router.asPath} />
                </QueryClientProvider>
            </ApolloProvider>
        </>
    );
};

export default App;
