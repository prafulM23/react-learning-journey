import { useEffect, useState } from "react"

const LearnEffect = () => {
    const [val, setVal] = useState(0)

    useEffect(() => {
        console.log("Value Changed")
        return () => {
            console.log("cleanUp function")
        }
    }, [val])

    return (
        <>
            <h1>Learn UseEffect </h1>
            <p>{val}</p>
            <button onClick={() => setVal(val + 1)}>Change</button>
        </>
    )
}

export default LearnEffect
