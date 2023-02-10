import { NextSeo } from "next-seo";
import { default as NextHead } from "next/head";

interface IProps {
    title: string;
}

export const Head: React.FC<IProps> = ({ title }) => (
    <>
        <NextHead>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
        </NextHead>

        <NextSeo
            title={title}
            description="I'am a Full-Stack Developer with a passion for delivering quality solutions and exploring new ways of solving problems. Proficient in React.js, Next.js and Node.js, with past experience with .NET development. Constantly seeking new challenges in software development."
        />
    </>
);
