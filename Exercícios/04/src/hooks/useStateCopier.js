import { useState } from "react";

export default function useStateCopier() {
    const [stateCopier, setStateCopier] = useState(false)

    const invertState = () => {
        setStateCopier(!stateCopier)
    }

    return { stateCopier, invertState }
}