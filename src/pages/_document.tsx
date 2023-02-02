import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="icon/favicon.png" />

                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.css"
                    rel="stylesheet"
                />

                <link rel="manifest" href="manifest.json" />
            </Head>

            <Main />

            <NextScript />

            <script
                src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"
                async
            ></script>
        </Html>
    );
}
