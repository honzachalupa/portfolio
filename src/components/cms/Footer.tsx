import cx from "classnames";
import moment from "moment";
import { WebPageJsonLd } from "next-seo";
import { useMemo } from "react";
import { ReactSVG } from "react-svg";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { IFooter } from "../../types/cms";

export const Footer: React.FC<IFooter> = ({
    yearFrom,
    socialNetworks,
    text,
}) => {
    const { distance } = useScrollPosition();

    const years = useMemo(
        () =>
            [yearFrom ? moment(yearFrom).year() : null, moment().year()]
                .filter(Boolean)
                .join(" - "),
        [yearFrom]
    );

    return (
        <>
            {socialNetworks.map(({ name, url }) => (
                <WebPageJsonLd key={name} description={name} id={url} />
            ))}

            <footer className="relative mb-20 text-center text-sm">
                <div
                    className={cx(
                        "left-5 bottom-5 z-10 mb-5 flex justify-center gap-5 transition-all duration-1000 md:fixed md:mb-0 md:flex-col",
                        {
                            "-translate-y-10 opacity-0": distance < 500,
                        }
                    )}
                >
                    {socialNetworks.map(({ name, url, icon }) => (
                        <a key={name} href={url} title={name}>
                            <ReactSVG
                                src={icon.url}
                                className="w-8 text-rose-600 transition-all hover:opacity-80 md:w-10"
                            />
                        </a>
                    ))}
                </div>

                <p className="mb-2 text-white opacity-75">
                    Copyright © {years} Jan Chalupa
                </p>

                {text && <p className="text-white opacity-30">{text}</p>}
            </footer>
        </>
    );
};
