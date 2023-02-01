import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
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
        <Context.Provider value={context}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            </QueryClientProvider>
        </Context.Provider>
    );
}
