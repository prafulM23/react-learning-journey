import { useState } from "react"

const LearnControlForm = () => {
    const [city, setCity] = useState("")
    const [value, setValue] = useState("")
    return (

        <>
            <h1>Learn Control Form </h1>
            <label>City Name : </label>
            <input type="text" placeholder="Enter your City" value={city} onChange={(e) => setCity(e.target.value)} />
            <p>Your City is {value}</p>
            <button onClick={() => setValue(city)}>Show</button>
        </>
    )
}

export default LearnControlForm