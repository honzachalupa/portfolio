import Image from "next/image";
import { SectionContainer } from "../../layouts/Primary";
import { AnimationFadeIn } from "../AnimationFadeIn";
import { ListItemWithIcon } from "../List";

export const AboutMeBlock: React.FC = () => (
    <AnimationFadeIn>
        <SectionContainer>
            <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
                About me
            </h2>

            <div className="group flex">
                <div>
                    <p className="pb-5 sm:text-lg">
                        Hey there! I&apos;m Jan and I&apos;m a React Developer
                        who loves to create top-notch web apps that people love
                        to use.
                    </p>
                    <p className="pb-5 sm:text-lg">
                        With several years of experience, I&apos;ve mastered the
                        art of developing user-friendly and scalable web apps
                        using React. My goal is to turn your vision into reality
                        and create apps that meet the needs of both businesses
                        and users. I pride myself in delivering high-quality
                        work on time and within budget.
                    </p>
                    <p className="pb-5 sm:text-lg">
                        I&apos;m a great communicator and I thrive in a team
                        environment. Working with others to come up with
                        creative solutions to problems is what I live for. And
                        when I&apos;m not coding, I&apos;m always seeking to
                        expand my knowledge and stay up-to-date with the latest
                        tech and industry trends.
                    </p>
                    <p className="pb-5 sm:text-lg">
                        Thanks for checking out my website. I can&apos;t wait to
                        bring my skills to your next React project!
                    </p>
                    <p className="pb-5 sm:text-lg">
                        Here are a few technologies I&apos;ve been working with
                        recently:
                    </p>

                    <ul className="columns-2">
                        {[
                            "TypeScript",
                            "React.js",
                            "Next.js",
                            "Node.js",
                            "Supabase",
                            "Strapi",
                        ].map((value) => (
                            <ListItemWithIcon key={value} className="mb-2">
                                {value}
                            </ListItemWithIcon>
                        ))}
                    </ul>
                </div>

                <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/default/profile.jpg`}
                    className="!relative hidden min-w-[40%] rounded-md pl-10 opacity-60 transition-all group-hover:opacity-100 sm:inline"
                    alt="Photo of myself"
                    fill
                />
            </div>
        </SectionContainer>
    </AnimationFadeIn>
);
