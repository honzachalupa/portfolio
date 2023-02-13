import { Head, Html, Main, NextScript } from "next/document";
import { localization } from "../../config";

const Document = () => (
    <Html lang={localization.defaultLocale}>
        <Head>
            <link rel="shortcut icon" href="icon/favicon.png" />
            <link rel="manifest" href="manifest.json" />
        </Head>

        <Main />

        <NextScript />
    </Html>
);

export default Document;
