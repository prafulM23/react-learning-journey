import { useEffect, useState } from "react"

const LearnEffect = () => {
    const [val, setVal] = useState(0)
    const [second, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        document.title = `Count : ${val}` //browser tab ka title update
        if (!isRunning) return;

        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [isRunning])

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <>
            <h1>Learn UseEffect </h1>
            <p>{val}</p>
            <button onClick={() => setVal(val + 1)}>Change</button>
            <p>Timer : {second}</p>
            <button
                onClick={() => setIsRunning(true)}
                disabled={isRunning}
            >
                Start
            </button>

            <button
                onClick={() => setIsRunning(false)}
                disabled={!isRunning}
            >
                Stop
            </button>

            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

export default LearnEffect
