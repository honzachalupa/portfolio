import Image from "next/image";
import { ListItemWithIcon } from "../List";

export const AboutMeBlock: React.FC = () => (
    <section className="py-36">
        <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
            About me
        </h2>

        <div className="group flex">
            <div className="pr-10">
                <p className="pb-5 text-lg">
                    Hey there! I&apos;m Jan and I&apos;m a React Developer who
                    loves to create top-notch web apps that people love to use.
                </p>
                <p className="pb-5 text-lg">
                    With several years of experience, I&apos;ve mastered the art
                    of developing user-friendly and scalable web apps using
                    React. My goal is to turn your vision into reality and
                    create apps that meet the needs of both businesses and
                    users. I pride myself in delivering high-quality work on
                    time and within budget.
                </p>
                <p className="pb-5 text-lg">
                    I&apos;m a great communicator and I thrive in a team
                    environment. Working with others to come up with creative
                    solutions to problems is what I live for. And when I&apos;m
                    not coding, I&apos;m always seeking to expand my knowledge
                    and stay up-to-date with the latest tech and industry
                    trends.
                </p>
                <p className="pb-5 text-lg">
                    Thanks for checking out my website. I can&apos;t wait to
                    bring my skills to your next React project!
                </p>
                <p className="pb-5 text-lg">
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
                className="!relative min-w-[40%] rounded-md opacity-60 transition-all group-hover:opacity-100"
                alt="Photo of myself"
                fill
            />
        </div>
    </section>
);
