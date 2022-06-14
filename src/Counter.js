import { useState, useEffect } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(count + 1);
    }

    return <button onClick={handlePress}>
            Press me! This button has been pressed {count} times.
        </button>

};