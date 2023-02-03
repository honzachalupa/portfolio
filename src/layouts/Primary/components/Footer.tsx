import { Github as GitHubIcon } from "@styled-icons/boxicons-logos/Github";
import { Instagram as InstagramIcon } from "@styled-icons/boxicons-logos/Instagram";
import { Linkedin as LinkedInIcon } from "@styled-icons/boxicons-logos/Linkedin";
import cx from "classnames";
import moment from "moment";
import { useScrollPosition } from "../../../hooks/useScrollPosition";

export const Footer: React.FC = () => {
    const { distance } = useScrollPosition();

    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/honzachalupa",
            icon: GitHubIcon,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/janchalupa93/",
            icon: LinkedInIcon,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/honza_chalupa",
            icon: InstagramIcon,
        },
    ];

    return (
        <footer className="relative mb-20 text-center text-sm">
            <div
                className={cx(
                    "left-5 bottom-5 z-10 mb-5 flex justify-center gap-5 transition-all duration-1000 md:fixed md:mb-0 md:flex-col",
                    {
                        "-translate-y-10 opacity-0": distance < 500,
                    }
                )}
            >
                {socialLinks.map(({ name, url, icon: Icon }) => (
                    <a key={name} href={url} title={`Visit my ${name}`}>
                        <Icon className="w-8 text-rose-600 transition-all hover:opacity-80 md:w-10" />
                    </a>
                ))}
            </div>

            <p className="mb-2 text-white opacity-75">
                Copyright © 2008 - {moment().year()} Jan Chalupa
            </p>

            <p className="text-white opacity-30">All rights reserved.</p>
        </footer>
    );
};
