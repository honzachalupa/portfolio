import cx from "classnames";

interface IProps {
    children: string;
    className?: string;
}

export const BlockHeadline: React.FC<IProps> = ({ children, className }) => (
    <h2
        className={cx(
            "pb-10 text-4xl font-medium text-white opacity-70",
            className
        )}
    >
        {children}
    </h2>
);
