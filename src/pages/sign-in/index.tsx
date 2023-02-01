import { useRouter } from "next/router";
import { useState } from "react";
import { Button, ButtonsContainer } from "../../components/Button";
import { useSupabaseAuth } from "../../hooks/useSupabaseAuth";
import { LayoutPrimary as Layout } from "../../layouts/Primary";

export default function SignIn() {
    const router = useRouter();
    const { signIn } = useSupabaseAuth();

    const [emailAddress, setEmailAddress] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSignIn = () => {
        if (emailAddress && password) {
            signIn({
                emailAddress,
                password,
            }).then(({ error }) => {
                if (error) {
                    alert(error.message);
                } else {
                    router.push("/administration");
                }
            });
        } else {
            alert("Missing credentials.");
        }
    };

    return (
        <Layout headline="Authentication">
            <div className="my-2">
                <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                    E-mail address
                </label>

                <input
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
            </div>

            <div className="my-2">
                <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-white dark:text-white"
                >
                    Password
                </label>

                <input
                    type="password"
                    id="password"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <ButtonsContainer>
                <Button label="Sign In" onClick={handleSignIn} />
            </ButtonsContainer>
        </Layout>
    );
}
