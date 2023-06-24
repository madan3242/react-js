import { useState } from "react"

const UpdatedComponent = (OriginalComponent, increaseCount) => {
    // function NewComponent(props) {
    //     const [counter, setCounter] = useState(10)
    //     return (
    //         <OriginalComponent counter={counter} incrementCounter={() => setCounter((counter) => counter + increaseCount)} />
    //     );
    // }
    // return NewComponent

    const NewComponent =  ( ) => {
        const [counter, setCounter] = useState(10)
        const incrementCounter = () => {
            setCounter((counter) => counter + increaseCount )
        }
        
        return (
            <OriginalComponent counter={counter} incrementCounter={incrementCounter} />
        );
    }
    return NewComponent
}

export default UpdatedComponent