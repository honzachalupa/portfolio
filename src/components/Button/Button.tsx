import cx from "classnames";
import { ButtonHTMLAttributes } from "react";

interface IProps {
    label: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
    label,
    type,
    className,
    onClick,
}) => (
    <button
        type={type || "button"}
        className={cx(
            "float-left my-5 mx-2 rounded-md border border-rose-600 px-7 py-4 font-mono text-rose-600 hover:opacity-80",
            className
        )}
        onClick={onClick}
    >
        {label}
    </button>
);
