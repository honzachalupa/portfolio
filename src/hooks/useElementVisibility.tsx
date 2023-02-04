import { useEffect, useRef, useState } from "react";

interface IState {
    isVisible: boolean;
    intersectionRatio: number;
}

export const useElementVisibility = <Element extends HTMLDivElement>({
    debug,
}: {
    debug?: boolean;
}): [IState, React.RefObject<Element>] => {
    const [visibilityData, setVisibilityData] = useState<IState>({
        isVisible: false,
        intersectionRatio: 0,
    });

    const elementRef = useRef<Element>(null);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisibilityData({
                        isVisible: entry.intersectionRatio > 0,
                        intersectionRatio: entry.intersectionRatio,
                    });
                });
            },
            {
                rootMargin: "-10px",
            }
        );

        observer.observe(elementRef.current!);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (debug) {
            console.log(visibilityData);
        }
    }, [debug, visibilityData]);

    return [visibilityData, elementRef];
};
