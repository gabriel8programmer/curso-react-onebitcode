import { useState } from "react";

const getInitialValue = () => {
    console.log("Obtendo o valor inicial")
    return 1 + 1
}

export default function useConter() {
    const [count, setCount] = useState(getInitialValue)

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
    }

    return { count, increment }
}