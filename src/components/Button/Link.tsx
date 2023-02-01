import cx from "classnames";
import Link from "next/link";
import { LinkHTMLAttributes } from "react";

interface IProps {
    label: string;
    href: string;
    target?: LinkHTMLAttributes<HTMLLinkElement>["type"];
    className?: string;
}

export const LinkButton: React.FC<IProps> = ({
    label,
    href,
    target,
    className,
}) => (
    <Link
        href={href}
        target={target}
        className={cx(
            "float-left my-5 mx-2 rounded-md border border-emerald-500 px-7 py-4 text-emerald-500 hover:opacity-80",
            className
        )}
    >
        {label}
    </Link>
);
