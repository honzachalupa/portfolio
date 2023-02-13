import cx from "classnames";
import Link from "next/link";
import { useContext } from "react";
import { INavigation } from "../../types/cms";
import { Context } from "../../utils/context";
import { SectionContainer } from "./layouts/Primary";

enum ELocales {
    en = "English",
    cs = "Čeština",
}

export const Navigation: React.FC<INavigation> = ({
    pages,
    indexTitleFallback,
    isLanguageSelectorVisible,
}) => {
    const { localization } = useContext(Context);

    return (
        <div className="absolute z-10 w-full">
            <SectionContainer as="nav" wider className="flex !py-0">
                {pages.map(({ title, slug }) => (
                    <Link
                        key={slug}
                        href={slug}
                        className="float-left mr-10 p-5"
                    >
                        {title || indexTitleFallback}
                    </Link>
                ))}

                {isLanguageSelectorVisible && (
                    <div className="ml-auto">
                        {localization.locales?.map((locale) => (
                            <Link
                                key={locale}
                                href="/"
                                locale={locale}
                                className={cx("float-left px-2 py-5", {
                                    "text-rose-600":
                                        localization.locale === locale,
                                })}
                            >
                                {/* @ts-ignore */}
                                {ELocales[locale] || locale}
                            </Link>
                        ))}
                    </div>
                )}
            </SectionContainer>
        </div>
    );
};
