import { useState } from "react"

export const Counter = () => {
    
    const [count, setCount] = useState(0);

    const onPress = () =>{
        setCount(count + 1)
    }

    return <button onClick = {onPress} >
        This button has been pressed {count} times.
    </button>
}