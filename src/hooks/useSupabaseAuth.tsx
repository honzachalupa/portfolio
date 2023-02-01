import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export const useSupabaseAuth = () => {
    const [user, setUser] = useState<{
        id: string;
        emailAddress: string;
    } | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getSession = async () => {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            throw error;
        }

        if (data.session) {
            await supabase.auth.setSession(data.session);
        } else {
            setIsLoading(false);
        }
    };

    const signUp = ({
        emailAddress,
        password,
    }: {
        emailAddress: string;
        password: string;
    }) =>
        supabase.auth.signUp({
            email: emailAddress,
            password,
        });

    const signIn = ({
        emailAddress,
        password,
    }: {
        emailAddress: string;
        password: string;
    }) =>
        supabase.auth.signInWithPassword({
            email: emailAddress,
            password,
        });

    const signOut = () => supabase.auth.signOut();

    useEffect(() => {
        getSession();

        supabase.auth.onAuthStateChange(async (e, session) => {
            if (session) {
                const { id, email: emailAddress } = session.user;

                if (id && emailAddress) {
                    setUser({
                        id,
                        emailAddress,
                    });
                }

                setIsLoading(false);
            }
        });
    }, []);

    return {
        user,
        isLoading,
        signUp,
        signIn,
        signOut,
    };
};
