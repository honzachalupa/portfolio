import throttle from "lodash/throttle";
import { useEffect, useRef, useState } from "react";

export const useElementVisibility = <Element extends HTMLDivElement>({
    debug,
}: {
    debug?: boolean;
}): [boolean, React.RefObject<Element>] => {
    const [isInView, setIsInView] = useState<boolean>(false);

    const elementRef = useRef<Element>(null);

    const offset = 50;
    const throttleMilliseconds = 200;

    const onScroll = throttle(() => {
        if (!elementRef.current) {
            setIsInView(false);

            return;
        }

        const { top, bottom } = elementRef.current.getBoundingClientRect();

        const isTopEdgeInView =
            top + offset >= 0 && top - offset <= window.innerHeight;
        const isBottomEdgeInView =
            bottom + offset >= 0 && bottom - offset <= window.innerHeight;

        if (debug) {
            console.log("useVisibility", {
                top: isTopEdgeInView,
                bottom: isBottomEdgeInView,
            });
        }

        setIsInView(isTopEdgeInView || isBottomEdgeInView);
    }, throttleMilliseconds);

    useEffect(() => {
        document.addEventListener("scroll", onScroll, true);

        return () => {
            document.removeEventListener("scroll", onScroll, true);
        };
    });

    return [isInView, elementRef];
};
