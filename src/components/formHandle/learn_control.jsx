import { useState } from "react"

const LearnControlForm = () => {
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(name)

    }
    return (

        <>
            <h1>Learn Control Form </h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <p>Your name is {value}</p>
                <button type="submit">Show</button>
                <button type="button" onClick={() => { setName(""); setValue("") }}>Clear</button>
            </form>

        </>
    )
}

export default LearnControlForm