import cx from "classnames";
import throttle from "lodash/throttle";
import { ReactNode, useEffect, useRef, useState } from "react";

const useVisibility = <Element extends HTMLDivElement>(
    offset = 0,
    throttleMilliseconds = 200
): [boolean, React.RefObject<Element>] => {
    const [isInView, setIsInView] = useState<boolean>(false);

    const elementRef = useRef<Element>(null);

    const onScroll = throttle(() => {
        if (!elementRef.current) {
            setIsInView(false);

            return;
        }

        const { top, bottom } = elementRef.current.getBoundingClientRect();

        setIsInView(
            (top + offset >= 0 && top - offset <= window.innerHeight) ||
                (bottom + offset >= 0 && bottom - offset <= window.innerHeight)
        );
    }, throttleMilliseconds);

    useEffect(() => {
        document.addEventListener("scroll", onScroll, true);

        return () => {
            document.removeEventListener("scroll", onScroll, true);
        };
    });

    return [isInView, elementRef];
};

interface IProps {
    className?: string;
    children: ReactNode;
}

export const ContentBlockFadeIn: React.FC<IProps> = ({
    className,
    children,
}) => {
    const [isInView, elementRef] = useVisibility();

    return (
        <div
            ref={elementRef}
            className={cx(className, "transition duration-500", {
                "translate-y-0 opacity-100": isInView,
                "translate-y-10 opacity-0": !isInView,
            })}
        >
            {children}
        </div>
    );
};
