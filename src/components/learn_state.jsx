import { useState } from "react"

const Learnstate = () => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(true);
    return (
        <>
            <span>_________________________________________</span>
            <h1>Learn State</h1>
            <p>Value : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incr</button>
            <button onClick={() => setCount(count - 1)}>Decr</button>
            <p>{isVisible ? "Hello React.Js !" : ""}</p>
            <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"}</button>

        </>
    )
}
export default Learnstate