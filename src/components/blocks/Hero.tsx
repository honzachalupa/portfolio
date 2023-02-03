import { SectionContainer } from "../../layouts/Primary";

export const HeroBlock: React.FC = () => (
    <SectionContainer wider className="flex h-screen flex-col justify-center">
        <p className="mb-7 font-mono text-rose-600 sm:text-lg">
            Hi, my name is
        </p>

        <p className="text-5xl font-semibold text-white opacity-70 sm:text-7xl">
            Jan Chalupa.
        </p>

        <p className="text-3xl font-semibold text-white opacity-40 sm:text-7xl">
            I build things for the web.
        </p>

        <p className="mt-7 text-white opacity-40">
            I&apos;am a React Developer with a passion for delivering quality
            <br />
            solutions and exploring new ways of solving problems.
            <br />
            Proficient in React.js, Next.js and Node.js, with past experience
            with .NET development.
            <br />
            Constantly seeking new challenges in software development.
        </p>
    </SectionContainer>
);
