import { ChevronRightIcon } from "@heroicons/react/24/outline";
import cx from "classnames";
import { ReactNode } from "react";

interface IProps {
    className?: string;
    children: ReactNode;
}

export const ListItemWithIcon: React.FC<IProps> = ({ className, children }) => (
    <li className={cx(className, "flex items-start")}>
        <ChevronRightIcon className="mr-3 mt-1 w-5 min-w-[18px] text-rose-600" />

        {children}
    </li>
);
