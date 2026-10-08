

const LearnEvent = () => {
    let email = "";
    let password = "";
    const handleEmail = (event) => {
        email = event.target.value;
    };
    const handlePassword = (event) => {
        password = event.target.value;
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);
    };

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

            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        onChange={handleEmail}
                    />
                </div>

                <br />

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        onChange={handlePassword}
                    />
                </div>

                <br />

                <button type="submit">Login</button>
            </form>

        </>
    )
}





export default LearnEvent