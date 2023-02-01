import cx from "classnames";
import Link from "next/link";

interface IProps {
    label: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

const classNameDefault =
    "rounded-md border px-7 py-4 my-5 mx-2 float-left text-emerald-500 border-emerald-500 hover:opacity-80";

export const Button: React.FC<IProps> = ({
    label,
    href,
    className,
    onClick,
}) => {
    if (!href && !onClick) {
        throw new Error("Missing href or onClick prop.");
    }

    if (href) {
        return (
            <Link href={href} className={cx(classNameDefault, className)}>
                {label}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={cx(classNameDefault, className)}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
