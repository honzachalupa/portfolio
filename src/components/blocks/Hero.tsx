import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { SectionContainer } from "../../layouts/Primary";

export const HeroBlock: React.FC = () => {
    const { distance } = useScrollPosition();

    return (
        <SectionContainer
            wider
            className="relative flex h-screen flex-col justify-center"
        >
            <p className="mb-7 font-mono text-rose-600 md:text-lg">
                Hi, my name is
            </p>

            <p className="text-5xl font-semibold text-white opacity-70 md:text-7xl">
                Jan Chalupa.
            </p>

            <p className="text-3xl font-semibold text-white opacity-40 md:text-7xl">
                I build things for the web.
            </p>

            <p className="mt-7 font-light text-white opacity-40">
                I&apos;am a Full-Stack Engineer with a passion for delivering
                quality
                <br />
                solutions and exploring new ways of solving problems.
                <br />
                Proficient in React.js, Next.js and Node.js, with past
                experience with .NET development.
                <br />
                Constantly seeking new challenges in software development.
            </p>

            <ChevronDoubleDownIcon
                className={cx(
                    "absolute bottom-5 left-[calc(50%-25px)] w-[50px] text-rose-600 transition-all duration-1000",
                    {
                        "-translate-y-10 opacity-0": distance > 500,
                    }
                )}
            />
        </SectionContainer>
    );
};
