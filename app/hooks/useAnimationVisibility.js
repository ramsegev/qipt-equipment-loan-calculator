import { useState, useEffect } from "react";

function useAnimationVisibility(isLoading) {
    const [isAnimationVisible, setIsAnimationVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState(0);

    useEffect(() => {
        if (isLoading) {
            setIsAnimationVisible(true);
        } else if (isAnimationVisible) {
            const timeout = setTimeout(() => setIsAnimationVisible(false), 5000);
            setTimeoutId(timeout);
            return () => clearTimeout(timeoutId);
        }
    }, [isLoading, isAnimationVisible]);

    return isAnimationVisible;
}

export default useAnimationVisibility;
