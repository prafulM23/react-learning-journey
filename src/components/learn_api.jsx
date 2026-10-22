
import { useEffect, useState } from "react";

const LearnAPI = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <h1>Learn API</h1>
            <h3>User List</h3>

            {loading && <p>Loading users...</p>}

            {error && <p>Error: {error}</p>}

            {!loading && !error && (
                users.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))
            )}
        </>
    );
};

export default LearnAPI;
