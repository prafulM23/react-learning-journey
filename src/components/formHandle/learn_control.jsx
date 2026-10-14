import { useState } from "react"

const LearnControlForm = () => {
    const [value, setValue] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: "",
            email: "",
        })
        setValue([formData.name, formData.email])

    }
    return (

        <>
            <h1>Learn Control Form </h1>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input required type="text" placeholder="Enter your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <label>Email : </label>
                <input required type="email" placeholder="Enter your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                <p>Your name is {value[0]}</p>
                <p>Your email is {value[1]}</p>

                <button type="submit">Show</button>
                <button type="button" onClick={() => { setValue([]); }}>Clear</button>
            </form>

        </>
    )
}

export default LearnControlForm