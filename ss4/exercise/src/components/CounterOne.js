import { useState } from "react";
export default function CounterOne() {

    const [count, setCount] = useState(1)
    const increase = () => {
        let newValue = count + 1
        setCount(newValue)
    }
    return (
        <>
            <h2>{count}</h2>
            <div>
                <button onClick={increase}>Add 1</button>
            </div>
        </>
    )
}