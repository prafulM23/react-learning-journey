const LearnConditionalRendering = () => {
    const isLogin = true;
    return (
        <>
            <h1> Learn Conditional Rendering</h1>
            <p>{isLogin ? "Welcome To Home!" : "Plz login!"}</p>
            <p>{isLogin && "Dashboard"}</p>

        </>
    )
}

export default LearnConditionalRendering