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
    const [{ isVisible }, elementRef] = useElementVisibility({ debug });

    return (
        <div
            ref={elementRef}
            className={cx(className, "transition delay-200 duration-500", {
                "translate-y-0 opacity-100": isVisible,
                "translate-y-10 opacity-0": !isVisible,
                "border border-red-800": debug,
            })}
        >
            {children}
        </div>
    );
};
