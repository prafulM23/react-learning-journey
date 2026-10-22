
import { useEffect, useState } from "react";

const LearnAPI = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");


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



    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <h1>Learn API</h1>
            <h3>User List</h3>

            {loading && <p>Loading users...</p>}

            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {!loading && !error && (
                filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <p key={user.id}>{user.name}</p>
                    ))
                ) : (
                    <p>No users found</p>
                )
            )}
        </>
    );
};

export default LearnAPI;
