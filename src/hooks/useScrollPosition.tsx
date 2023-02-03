import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState<{
        distance: number;
        progress: number;
    }>({
        distance: 0,
        progress: 0,
    });

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition({
                distance: window.pageYOffset,
                progress: Math.round(
                    (100 /
                        (document.body.scrollHeight -
                            document.documentElement.clientHeight)) *
                        window.pageYOffset
                ),
            });
        };

        window.addEventListener("scroll", updatePosition);

        updatePosition();

        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};
