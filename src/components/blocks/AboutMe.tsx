import Image from "next/image";
import { ListItemWithIcon } from "../List";

export const AboutMeBlock: React.FC = () => (
    <section className="py-36">
        <h2 className="pb-10 text-4xl font-medium text-white opacity-70">
            About me
        </h2>

        <div className="flex">
            <div className="pr-10">
                <p className="pb-5 text-lg">
                    Hello! My name is Brittany and I enjoy creating things that
                    live on the internet. My interest in web development started
                    back in 2012 when I decided to try editing custom Tumblr
                    themes — turns out hacking together a custom reblog button
                    taught me a lot about HTML & CSS!
                </p>

                <p className="pb-5 text-lg">
                    Fast-forward to today, and I&apos;ve had the privilege of
                    working at an advertising agency, a start-up, a huge
                    corporation, and a student-led design studio. My main focus
                    these days is building accessible, inclusive products and
                    digital experiences at Upstatement for a variety of clients.
                </p>

                <p className="pb-5 text-lg">
                    I also recently launched a course that covers everything you
                    need to build a web app with the Spotify API using Node &
                    React.
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
                src=""
                className="min-w-[40%] border border-slate-400"
                alt="Photo of myself"
            />
        </div>
    </section>
);
