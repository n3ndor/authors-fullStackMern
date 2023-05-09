import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Container, Button } from 'react-bootstrap';

const DisplayAll = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/author")
            .then(response => setAllAuthors(response.data))
            .catch((err) => console.log(err.response))
    }, []);

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/author/" + id)
            .then((response) => {
                setAllAuthors(allAuthors.filter(author => author._id !== id));
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <Container>
            <Link to={"/new"} className="btn btn-primary my-3">Add New Author</Link>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
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
                                    <Link to={"/edit/" + author._id}><Button variant="warning" className="me-2">Edit</Button></Link>
                                    <Button onClick={() => deleteAuthor(author._id)} variant="danger">Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
};

export default DisplayAll;
