import Link from "next/link";
import { INavigation } from "../../types/cms";
import { SectionContainer } from "./layouts/Primary";

export const Navigation: React.FC<INavigation> = ({
    pages,
    indexTitleFallback,
}) => (
    <div className="absolute z-10 w-full">
        <SectionContainer as="nav" wider className="!py-0">
            {pages.map(({ title, slug }) => (
                <Link key={slug} href={slug} className="float-left mr-10 p-5">
                    {title || indexTitleFallback}
                </Link>
            ))}
        </SectionContainer>
    </div>
);
