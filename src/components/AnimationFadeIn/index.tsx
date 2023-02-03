import cx from "classnames";
import { ReactNode } from "react";
import { useElementVisibility } from "../../hooks/useElementVisibility";

interface IProps {
    className?: string;
    children: ReactNode;
    debug?: boolean;
}

export const AnimationFadeIn: React.FC<IProps> = ({
    className,
    children,
    debug,
}) => {
    const [isInView, elementRef] = useElementVisibility({ debug });

    return (
        <div
            ref={elementRef}
            className={cx(className, "delay-50 transition duration-500", {
                "translate-y-0 opacity-100": isInView,
                "translate-y-10 opacity-0": !isInView,
                "border border-red-800": debug,
            })}
        >
            {children}
        </div>
    );
};
