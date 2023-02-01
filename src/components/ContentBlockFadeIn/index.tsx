import throttle from "lodash/throttle";
import { ReactNode, useEffect, useRef, useState } from "react";

const useVisibility = <Element extends HTMLElement>(
    offset = 0,
    throttleMilliseconds = 200
): [Boolean, React.RefObject<Element>] => {
    const [isVisible, setIsVisible] = useState(false);
    const currentElement = useRef<Element>(null);

    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setIsVisible(false);
            return;
        }

        const { top, bottom } = currentElement.current.getBoundingClientRect();

        setIsVisible(
            (top + offset >= 0 && top - offset <= window.innerHeight) ||
                (bottom + offset >= 0 && bottom - offset <= window.innerHeight)
        );
    }, throttleMilliseconds);

    useEffect(() => {
        document.addEventListener("scroll", onScroll, true);
        return () => document.removeEventListener("scroll", onScroll, true);
    });

    return [isVisible, currentElement];
};

export const ContentBlockFadeIn: React.FC<{
    backgroundColor: string;
    children: ReactNode;
}> = ({ backgroundColor, children }) => {
    const [isVisible, currentElement] = useVisibility();

    return (
        <article ref={currentElement} className={`${backgroundColor}`}>
            <div
                className={`h-screen w-screen transition delay-500 duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                {children}
            </div>
        </article>
    );
};
