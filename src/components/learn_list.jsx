const LearnList = () => {
    const std = [
        { id: 1, product: "Iphone 15", price: 100000 },
        { id: 2, product: "LCD", price: 15000 },
        { id: 3, product: "Laptop", price: 60000 },
        { id: 4, product: "Watch", price: 1000 }
    ];

    return (
        <>
            <h1>Learn List</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>

                <tbody>
                    {std.map((item, i) => (

                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.product}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default LearnList;