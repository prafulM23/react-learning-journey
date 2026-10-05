

const User = ({ name, role }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
};

const Card = ({ children }) => {
    return (
        <>
            <div>
                {children}
            </div>

        </>
    )
}

const LearnProps = () => {
    return (
        <>
            <h1>Learn Props</h1>
            <User name="Praful" role="Frontend Developer" />
            <User name="Rahul" role="Backend Developer" />
            <User name="Aman" role="Full Stack Developer" />
            <Card>
                <p>This is card </p>
                <p>it is display By children</p>
            </Card>
            <span>_________________________</span>
        </>
    );
};

export default LearnProps
