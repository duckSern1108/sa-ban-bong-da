import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [isNeeded,setIsNeeded] = useState(false)
    const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
        if (isNeeded) window.addEventListener("mousemove", updateMousePosition);
        else if (mousePosition.x !== null)window.removeEventListener("mousemove", updateMousePosition);

        return () =>
            window.removeEventListener("mousemove", updateMousePosition);
    }, [isNeeded]);

    return [mousePosition,setIsNeeded];
};

export default useMousePosition;
