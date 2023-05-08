import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


const DisplayAll = () => {
    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/author")
            .then(response => setAllAuthors(response.data))
            .catch((err) => console.log(err.response))
    }, [])



    return (
        <div>
            <Link to={"/new"}>Add New Author</Link>

            <table>
                <thead>
                    <tr >
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {allAuthors.map((author, index) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={"/edit/" + author._id}><button>Edit</button></Link>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>


    )
};

export default DisplayAll;