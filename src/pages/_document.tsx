import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="icon/favicon.png" />

                <link rel="manifest" href="manifest.json" />
            </Head>

            <Main />

            <NextScript />
        </Html>
    );
}
