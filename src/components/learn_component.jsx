const Header = () => {
    return (
        <h3>Welcome to React journey</h3>
    )
}

const Profile = () => {
    const name = "Praful"
    const age = 23;
    const live = "Indore";

    return (
        <>
            <h3>My Name is {name}</h3>
            <p>My age is {age}</p>
            <p>I live in {live}</p>
        </>
    )
}

const Footer = () => {
    return (
        <p>______keep Learning React !______</p>
    )
}

const LearnComponent = () => {
    return (
        <>
            <h1>Learning Components</h1>
            <Header />
            <Profile />
            <Footer />
            <span>_______________________________</span>
        </>
    )
}

export default LearnComponent





