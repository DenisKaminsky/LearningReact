import { useState, useEffect } from "react";

function useCounter(initialValue, step, interval) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter + step);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, step]);

    return counter;
}