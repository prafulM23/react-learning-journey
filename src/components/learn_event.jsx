const handleEvent = (name) => {
    console.log(`Hello ${name}`)
}

const handleEvent2 = () => {
    console.log("Hello Words")
}

const handleChange = (e) => {
    console.log(e.target.value)
}
const handleClick = (e) => {
    console.log(e.target.innerText) // output = Click object
}


const LearnEvent = () => {
    return (
        <>
            <h2>Learn Event !</h2>
            <h4>Onclick !</h4>
            <button onClick={() => handleEvent("praful")}>Click Argu</button>
            <button onClick={handleEvent2}>Click !</button>
            <h4>Onchange !</h4>
            <input type="text" placeholder="Enter Something" onChange={handleChange} />
            <h4>Event Object !</h4>
            <button onClick={handleClick}>Click object !</button>

        </>
    )
}

export default LearnEvent