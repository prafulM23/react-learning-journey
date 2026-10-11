import { useState } from "react"

const Learnstate = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <span>_________________________________________</span>
            <h1>Learn State</h1>
            <p>Value : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incr</button>
            <button onClick={() => setCount(count - 1)}>Decr</button>

        </>
    )
}
export default Learnstate