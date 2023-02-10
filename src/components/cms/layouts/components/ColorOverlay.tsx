import { useScrollPosition } from "../../../../hooks/useScrollPosition";

export const ColorOverlay: React.FC = () => {
    const { progress } = useScrollPosition();

    const scrollProgress = Math.round(progress * 10) / 10;

    return (
        <div
            className="fixed left-0 top-0 -z-10 h-screen w-screen bg-[#0a192f]"
            style={{ opacity: scrollProgress / 100 }}
        />
    );
};
