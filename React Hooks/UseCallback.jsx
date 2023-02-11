import { useCallback } from "react";

const memorizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },
    [a, b]
)