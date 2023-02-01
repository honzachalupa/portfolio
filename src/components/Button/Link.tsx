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
            "float-left my-5 mx-2 rounded-md border border-rose-600 px-7 py-4 font-mono text-rose-600 hover:opacity-80",
            className
        )}
    >
        {label}
    </Link>
);
