import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button, ButtonsContainer } from "../../components/Button";
import { useSupabaseAuth } from "../../hooks/useSupabaseAuth";
import { LayoutPrimary as Layout } from "../../layouts/Primary";

export default function SignOut() {
    const router = useRouter();
    const { user, signOut, isLoading } = useSupabaseAuth();

    const handleSignOut = () => {
        signOut();
    };

    useEffect(() => {
        if (!user && !isLoading) {
            router.push("/");
        }
    }, [router, user, isLoading]);

    return (
        <Layout headline="Sign Out">
            <ButtonsContainer>
                <Button label="Sign Out" onClick={handleSignOut} />
            </ButtonsContainer>
        </Layout>
    );
}
