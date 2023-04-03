import { useState } from "react";
export default function CounterTwo() {

    const [count, setCount] = useState(2)
    const increase = () => {
        let newValue = count + 2
        setCount(newValue)
    }
    return (
        <>
            <h2>{count}</h2>
            <div>
                <button onClick={increase}>Add 2</button>
            </div>
        </>
    )
}