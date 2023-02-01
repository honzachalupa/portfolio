import cx from "classnames";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}

export const ButtonsContainer: React.FC<IProps> = ({ children, className }) => (
    <div className={cx(className, "flex justify-center")}>{children}</div>
);
