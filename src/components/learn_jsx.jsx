function LearnJsx() {
    const name = "Praful";
    const age = 23;
    const role = "Full Stack Developer";
    let first = 10;
    let sec = 20;

    return (
        <div>
            <h1>Learn JSX-------------------------</h1>
            <h3>Hello, I am {name}</h3>
            <p>My age is {age}</p>
            <p>I am a {role}</p>
            <p>I am learning React.</p>

            <div>
                <p>First Number : {first}</p>
                <p>Second Number : {sec}</p>
                <p>Total : {first + sec}</p>
            </div>
            <span>___________________________________________</span>
        </div>
    );
}

export default LearnJsx;
