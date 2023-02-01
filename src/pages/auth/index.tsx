import { useSupabaseAuth } from "../../hooks/useSupabaseAuth";
import { LayoutPrimary as Layout } from "../../layouts/Primary";

const credentials = {
    emailAddress: "janchalupa@outlook.cz",
    password: "Cottage51",
};

export default function SupabaseAuthDemo() {
    const { user, isLoading, signIn, signOut } = useSupabaseAuth();

    const handleSignIn = () => {
        signIn(credentials);
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <Layout headline="Authentication">
            <form>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        E-mail address
                    </label>

                    <input
                        type="email"
                        id="email"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
                >
                    Sign In
                </button>
            </form>

            {user ? (
                <button onClick={handleSignOut}>Sign Out</button>
            ) : (
                <button onClick={handleSignIn}>Sign In</button>
            )}
        </Layout>
    );
}
