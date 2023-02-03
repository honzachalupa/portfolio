import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useSupabaseAuth } from "../hooks/useSupabaseAuth";
import "../styles/globals.css";
import { Context, IContext } from "../utils/context";

export default function App({ Component, pageProps }: AppProps) {
    const { user } = useSupabaseAuth();

    const queryClient = new QueryClient();

    const context: IContext = {
        user,
    };

    return (
        <>
            <GoogleAnalytics />

            <Context.Provider value={context}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </Context.Provider>
        </>
    );
}
