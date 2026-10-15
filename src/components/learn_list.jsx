import { useState } from "react";

const LearnList = () => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState("")
    const std = [
        { id: 1, product: "Iphone 15", price: 100000 },
        { id: 2, product: "LCD", price: 15000 },
        { id: 3, product: "Laptop", price: 60000 },
        { id: 4, product: "Watch", price: 1000 },
        { id: 5, product: "TV", price: 8000 },
        { id: 6, product: "AC", price: 40000 }
    ];

    const handleFind = () => {
        setData(search.trim())
    }
    const filteredData = std.filter((item, id) =>
        item.product.toLocaleLowerCase().includes(data.toLocaleLowerCase())
    )
    
    return (
        <>
            <h1>Learn List</h1>

            <input type="text" placeholder="Find Item" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleFind}>Find</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item, i) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.product}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    ) :
                        <tr>
                            <td colSpan={3}>Product not found</td>
                        </tr>
                    }
                </tbody>
            </table>


        </>
    );
};

export default LearnList;