import { useState } from "react"

const LearnConditionalRendering = () => {
    const [isLogin, setIsLogin] = useState(true)
    const role = "admin"
    let count = 3
    let age = 20;
    return (
        <>
            <h1> Learn Conditional Rendering</h1>
            <p>{isLogin ? "Welcome To Home!" : "Plz login!"}</p>
            <p>{isLogin && "Dashboard"}</p>
            <h2>
                {role === "admin"
                    ? "Welcome Admin"
                    : role === "user"
                        ? "Welcome User"
                        : "Access Denied"}
            </h2>
            <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "LogOut" : "Login"}</button>
            <p>{count > 0 && "hello This is Paragraf"}</p>
            <p>{age >= 18 ? "You can vote" : "You cannot vote"}</p>

        </>
    )
}

export default LearnConditionalRendering